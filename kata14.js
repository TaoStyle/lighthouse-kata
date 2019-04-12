/*
Expected Output:
clu hlt io
fto ehg ee dd
hae and via ecy
imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseoau
*/

const squareCode = function(message) {
  message = replaceSpace(message);
  const secretKey = (Math.ceil(Math.sqrt(message.length)));
  let secretMessage = '';

  for (let x = 0; x < secretKey; x++) {
    let position = x;
    while(position < message.length){
      if (message[position] !== undefined) { secretMessage += message[position]; }
      position += secretKey;
    }

    // Test if it's the last iteration, to prevent space at the end
    if(x < secretKey - 1) { secretMessage += ' '; }
  }

  function replaceSpace(string,character = '') {
    return string.split(' ').join(character);
  }

  return secretMessage;
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));