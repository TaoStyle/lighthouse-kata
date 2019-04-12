/*
Expected results:
{
  iOS: ["Samuel"],
  Web: ["Victoria", "Karim", "Donald"]
}
{
  Blockchain: ["Brendan"],
  Web: ["David", "Carlos"],
  iOS: ["Martha"]
}
*/

const organizeInstructors = function(instructors) {
  let instructorsByCourse = {};
  for(let entry of instructors) {
    if (instructorsByCourse[entry.course] === undefined) { instructorsByCourse[entry.course] = []; }
    instructorsByCourse[entry.course].push(entry.name);
  }
  return instructorsByCourse;
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));