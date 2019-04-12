/*
Expected Output:
thisIsAString <- camel
ThisIsAString <- pascal
this_is_a_string <- snake
this-is-a-string <- kebab
This Is A String <- title
thIs Is A strIng <- vowel
THiS iS a STRiNG <- consonant
THIS_IS_A_STRING <- upper, snake
*/

const makeCase = function(input, casing) {
  let casedString = input;
  const voyels = ['a','e','i','o','u'];
  const precedenceList = {
    1 : ['camel', 'pascal', 'snake', 'kebab', 'title'],
    2 : ['vowel', 'consonant'],
    3 : ['upper', 'lower']
  };

  let orderedCasing = orderCasingByPrecedence(casing);

  // Case Sorting, could be turned into an indexed array of functions?
  for(let currentCasing of orderedCasing) {
    switch(currentCasing) {
    case 'camel':
      casedString = toCamelCasing(casedString);
      break;
    case 'pascal':
      casedString = toPascalCasing(casedString);
      break;
    case 'snake':
      casedString = toSnakeCasing(casedString);
      break;
    case 'kebab':
      casedString = toKebabCasing(casedString);
      break;
    case 'title':
      casedString = toTitleCasing(casedString);
      break;
    case 'vowel':
      casedString = toVowelCasing(casedString);
      break;
    case 'consonant':
      casedString = toConsonantCasing(casedString);
      break;
    case 'upper':
      casedString = toUpperCasing(casedString);
      break;
    case 'lower':
      casedString = toLowerCasing(casedString);
      break;
    }
  }

  /*
  * Casing Functions
  * COULD review string variables name
  */
  function toCamelCasing(string) {
    let tempString = upperCaseFirstLetter(string);
    let casedString = '';
    casedString += tempString.slice(0, 1).toLowerCase();
    casedString += tempString.slice(1);
    return replaceSpace(casedString,'');
  }

  function toPascalCasing(string) {
    let casedString = upperCaseFirstLetter(string);
    return replaceSpace(casedString,'');
  }

  function toSnakeCasing(string) {
    return replaceSpace(string,'_');
  }

  function toKebabCasing(string) {
    return replaceSpace(string,'-');
  }

  function toTitleCasing(string) {
    return upperCaseFirstLetter(string);
  }

  function toVowelCasing(string) {
    let casedString = '';
    for (let letter of string) {
      casedString += (voyels.includes(letter) ? letter.toUpperCase() : letter.toLowerCase());
    }
    return casedString;
  }

  function toConsonantCasing(string) {
    let casedString = '';
    for (let letter of string) {
      casedString += (voyels.includes(letter) ? letter.toLowerCase() : letter.toUpperCase());
    }
    return casedString;
  }

  function toUpperCasing(string) {
    return string.toUpperCase();
  }

  function toLowerCasing(string) {
    return string.toLowerCase();
  }


  /*
  * Support functions
  */
  function replaceSpace(string,character) {
    return string.split(' ').join(character);
  }

  function upperCaseFirstLetter(string) {
    let asArray = string.split(' ');
    let returnString = '';
    for (let each of asArray) {
      returnString += each.slice(0, 1).toUpperCase();
      returnString += each.slice(1);
      returnString += ' ';
    }
    return returnString;
  }

  function orderCasingByPrecedence(casing) {
    let newOrder = [];
    let precedence2casing = [];
    let precedence3casing = [];

    // If it's not an array, we can simply push it
    if(!Array.isArray(casing)) {
      newOrder.push(casing);
    } else {
      // Push the precedence 1 in queue and temporarily isolate precedence 2 and 3 in holding arrays
      for(let casingToEvaluate of casing) {
        if (precedenceList[1].includes(casingToEvaluate)) { newOrder.push(casingToEvaluate); }
        else if (precedenceList[2].includes(casingToEvaluate)) { precedence2casing.push(casingToEvaluate); }
        else if (precedenceList[3].includes(casingToEvaluate)) { precedence3casing.push(casingToEvaluate); }
      }

      // Bring back elements set aside at previous step
      newOrder = newOrder.concat(precedence2casing);
      newOrder = newOrder.concat(precedence3casing);
    }
    return newOrder;
  }


  console.log(casedString);
};

makeCase("this is a string", "camel");
makeCase("this is a string", "pascal");
makeCase("this is a string", "snake");
makeCase("this is a string", "kebab");
makeCase("this is a string", "title");
makeCase("this is a string", "vowel");
makeCase("this is a string", "consonant");
makeCase("this is a string", ["upper", "snake"]);