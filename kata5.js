const urlEncode = function(text) {
  let asArray = [];
  let asArrayToClean = text.split(" ");
  for (let each of asArrayToClean) {
    if(each) { asArray.push(each); }
  }
  return asArray.join("%20");
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));