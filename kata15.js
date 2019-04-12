function generateBoard(whiteQueen, blackQueen) {
  let board = [];
  for (let y = 0; y < 8; y += 1) {
    board.push([0, 0, 0, 0, 0, 0, 0, 0]);
  }

  placeQueen(whiteQueen);
  placeQueen(blackQueen);

  function placeQueen(queen) {
    board[queen[1]][queen[0]] = 1;
  }
  return board;
}

function queenThreat(board) {
  let refQueenCoords = findFirstQueen(board);

  // Search for 1st queen
  function findFirstQueen(board) {
    for (let y = 0; y < 8; y += 1){
      if (board[y].includes( 1 )) { return [board[y].indexOf(1), y ]; }
    }
  }

  let validCoords = [];
  let offsetGrid = 1;
  // List valid positions of second queen, based on 1st queen position
  do {
    // Build array of valid coordinates
    // Top Left Quadrant
    if(between(refQueenCoords[1] - offsetGrid,0,7) &&
      between(refQueenCoords[0] - offsetGrid,0,7))
      {validCoords.push([refQueenCoords[0] - offsetGrid, refQueenCoords[1] - offsetGrid]); }

    // Top Right Quadrant
    if(between(refQueenCoords[1] - offsetGrid,0,7) &&
       between(refQueenCoords[0] + offsetGrid,0,7))
       {validCoords.push([refQueenCoords[0] + offsetGrid, refQueenCoords[1] - offsetGrid]); }

    // Bottom Left Quadrant
    if(between(refQueenCoords[1] + offsetGrid,0,7) &&
       between(refQueenCoords[0] - offsetGrid,0,7))
      {validCoords.push([refQueenCoords[0] - offsetGrid, refQueenCoords[1] + offsetGrid]); }

    // Bottom Right Quadrant
    if(between(refQueenCoords[1] + offsetGrid,0,7) &&
       between(refQueenCoords[0] + offsetGrid,0,7))
      {validCoords.push([refQueenCoords[0] + offsetGrid, refQueenCoords[1] + offsetGrid]); }

    offsetGrid++;
  } while (offsetGrid < 8)

  // Test if one of the valid coordinates is a queen
  for (let coords of validCoords) {
    if(board[coords[0]][coords[1]] === 1 ) { return true; }
  }

  function between(submitted, minimum, maximum) {
    return submitted >= minimum && submitted <= maximum;
  }

  return false;
}

let whiteQueen = [0, 0];
let blackQueen = [7, 5];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));

/*
let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));
*/