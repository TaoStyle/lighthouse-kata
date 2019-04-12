/*
Output Sample:
December 2nd, 2017
November 11th, 2007
August 24th, 1987
*/


let talkingCalendar = function(date) {
  let stringDate = '';
  let arrayDate = date.split('/');
  let month = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  stringDate += month[Number(arrayDate[1]) - 1];
  stringDate += ' ';
  stringDate += Number(arrayDate[2]);
  if (Number(arrayDate[2]) < 4 || Number(arrayDate[2]) > 19) {
    switch (Number(arrayDate[2]) % 10) {
    case 1:
      stringDate += 'st';
      break;
    case 2:
      stringDate += 'nd';
      break;
    case 3:
      stringDate += 'rd';
      break;
    default:
      stringDate += 'th';
    }
  } else {
    stringDate += 'th';
  }
  stringDate += ', ';
  stringDate += arrayDate[0];
  return stringDate;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));