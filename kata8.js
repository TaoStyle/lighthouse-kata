const multiplicationTable = function(maxValue) {
  let table = '';
  for(let i = 1; i <= maxValue; i++) {
    for(let y = 1; y <= maxValue; y++) {
      table += (i * y) + ' ';
    }
    table += '\n';
  }
  return table;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));