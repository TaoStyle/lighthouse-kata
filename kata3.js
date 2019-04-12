let numberOfVowels = function(data) {
  let vowelsSum = 0;
  let vowels = ['a', 'e', 'i', 'o', 'u'];

  for (let i = 0; i < data.length; i++) {
    if (vowels.includes(data[i])) { vowelsSum += 1; }
  }
  return vowelsSum;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));