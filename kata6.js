let repeatNumbers = function(data) {
  let stringValue = '';
  for(let i = 0; i < data.length ; i++) {
    let counter = 0;
    do {
      stringValue += data[i][0];
      counter += 1;
    } while (counter < data[i][1]);
    if(i < data.length - 1) { stringValue += ', '; }
  }
  return stringValue;
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));