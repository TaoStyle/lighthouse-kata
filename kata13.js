/*
Expected output:
{duck: "rubber"}
{bootcamp: "Lighthouse Labs"}
{city: "Vancouver", weather: "lots of rain"}
"lots of rain"
*/

const urlDecode = function(text) {
  let urlContent = {};
  let urlElements = text.split('&');
  for(let element of urlElements){
    //console.log('test1: ' + );

    urlContent[element.split('=')[0]] = element.split('=')[1].split('%20').join(' ');
  }
  //urlContent.[text.split('&').split('=')] = text.split('&').split('=').split('=');
  return urlContent;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);