/*
Expected output:
{east: 1, north: 3}
{east: 3, north: 3}
{east: 0, north: 0}
*/
const blocksAway = function(directions) {
  /*
  Let's build a roseNorth:
               North: roseNorth[0]
                 |
       West:  --   -- East:
roseNorth[3]     |      roseNorth[1]
               South:
               roseNorth[2]
  */
  var roseNorth = [0,0,0,0];
  var heading = 0;
  while(directions.length > 0) {
    let turn = directions.shift();
    let steps = directions.shift();
    heading = (turn == 'left' ?
      // If we turned left
      (heading === 0 ? 3 : heading - 1) :
      // If we turned right
      (heading === 3 ? 0 : heading + 1));
    roseNorth[heading] += steps;
  }
  let shortDirections = {};
  (roseNorth[3] > roseNorth[1] ? shortDirections.west = roseNorth[3] - roseNorth[1] : shortDirections.east = roseNorth[1] - roseNorth[3]);
  (roseNorth[0] > roseNorth[2] ? shortDirections.north = roseNorth[0] - roseNorth[2] : shortDirections.south = roseNorth[2] - roseNorth[0]);
  return shortDirections;
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));