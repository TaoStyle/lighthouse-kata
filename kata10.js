/*
Expected Output:
{ twoDollar: 1, dime: 1, penny: 3 }
{ ten: 1, twoDollar: 1, dollar: 1, quarter: 3, penny: 2 }
{ twoDollar: 2, quarter: 3, dime: 2, penny: 4 }
*/
let calculateChange = function(total, cash) {
  let change = cash - total;
  let changeDetail = {};
  // Twenty dollars
  if(Math.floor(change / 2000)) {
    changeDetail.twenty = Math.floor(change / 2000);
    change = (change % 2000);
  }
  // Ten dollars
  if(Math.floor(change / 1000)) {
    changeDetail.ten = Math.floor(change / 1000);
    change = (change % 1000);
  }
  // Five dollars
  if(Math.floor(change / 500)) {
    changeDetail.fiveDollar = Math.floor(change / 500);
    change = (change % 500);
  }
  // Two dollars
  if(Math.floor(change / 200)) {
    changeDetail.twoDollar = Math.floor(change / 200);
    change = (change % 200);
  }
  // One dollar
  if(Math.floor(change / 100)) {
    changeDetail.dollar = Math.floor(change / 100);
    change = (change % 100);
  }
  // Quarter (25¢)
  if(Math.floor(change / 25)) {
    changeDetail.quarter = Math.floor(change / 25);
    change = (change % 25);
  }
  // Dime (10¢)
  if(Math.floor(change / 10)) {
    changeDetail.dime = Math.floor(change / 10);
    change = (change % 10);
  }
  // Nickel (5¢)
  if(Math.floor(change / 5)) {
    changeDetail.nickel = Math.floor(change / 5);
    change = (change % 5);
  }
  // Penny (1¢)
  if(Math.floor(change / 1)) {
    changeDetail.penny = Math.floor(change / 1);
    change = (change % 1);
  }
  return changeDetail;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));