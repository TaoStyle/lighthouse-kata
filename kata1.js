/*
Return the sum of the two largest numbers of an array
Current_Limitations: Won't evaluate the received input
*/
let sumLargestNumbers = function(data) {
  let numbers = [];
  for(let value of data) {
    switch(numbers.length) {
    case 2:
      if(numbers[0] > numbers[1]) {
        if(value > numbers[1]) { numbers[1] = value; }
      } else {
        // Either numbers[0] is smaller than numbers[1] OR they're equal.
        if(value > numbers[0]) { numbers[0] = value; }
      }
      continue;
    default:
      // Filling the array until there's 2 elements (case 2)
      numbers.push(value);
    }
  }
  return numbers[0] + numbers[1];
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));