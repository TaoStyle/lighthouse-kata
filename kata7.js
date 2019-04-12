let camelCase = function(input) {
  let asArray = input.split(" ");
  let returnString = asArray.shift();
  for (let each of asArray) {
    returnString += each.slice(0, 1).toUpperCase();
    returnString += each.slice(1);
  }
  return returnString;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));