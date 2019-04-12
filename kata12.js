const makeCase = function(input, casing) {
  let casedString = input;
  const precedenceList = {
    1 : ["camel", "pascal", "snake", "kebab", "title"],
    2 : ["vowel", "consonant"],
    3 : ["upper", "lower"]
  };

  let orderedCasing = orderCasingByPrecedence(casing);

  // Case Sorting, could be turned into an indexed array of functions?
  for(let currentCasing of orderedCasing) {
    switch(currentCasing) {
    case "camel":
      // this is a string -> thisIsAString
      casedString = caseFirstCharOfWord(casedString);
      casedString = caseFirstCharOfString(casedString,"toLower");
      casedString = replaceSpace(casedString,"");
      break;
    case "consonant":
      // this is a string -> THiS iS a STRiNG
      casedString = casedString.toUpperCase();
      casedString = vowelCasing(casedString,"toLower");
      break;
    case "kebab":
      // this is a string -> this-is-a-string
      casedString = replaceSpace(casedString,"-");
      break;
    case "lower":
      // this is a string -> this is a string
      casedString = casedString.toLowerCase();
      break;
    case "pascal":
      // this is a string -> ThisIsAString
      casedString = caseFirstCharOfWord(casedString);
      casedString = replaceSpace(casedString,"");
      break;
    case "snake":
      // this is a string -> this_is_a_string
      casedString = replaceSpace(casedString,"_");
      break;
    case "title":
      // this is a string -> This Is A String
      casedString = caseFirstCharOfWord(casedString);
      break;
    case "upper":
      // this is a string -> THIS IS A STRING
      casedString = casedString.toUpperCase();
      break;
    case "vowel":
      // this is a string -> thIs Is A strIng
      casedString = vowelCasing(casedString,"toUpper");
      break;
    }
  }

  /*
  * Support functions
  */

  function vowelCasing(string, casing = "toUpper") {
    const voyels = ["a","e","i","o","u",
                    "A","E","I","O","U"];
    let casedString = "";
    for (let letter of string) {
      casedString += ( !voyels.includes(letter)
        ? letter
        : casing === "toUpper"
          ? letter.toUpperCase()
          : letter.toLowerCase()
      );
    }
    return casedString;
  }

  function replaceSpace(string,char) {
    return string.split(" ").join(char);
  }

  function caseFirstCharOfWord(string,casing = "toUpper") {
    let asArray = string.split(" ");
    let returnString = "";
    for (let each of asArray) {
      returnString += (casing === "toUpper"
        ? each.slice(0, 1).toUpperCase()
        : each.slice(0, 1).toLowerCase()
      );
      returnString += each.slice(1);
      returnString += " ";
    }
    return returnString;
  }

  function caseFirstCharOfString(string,casing = "toUpper") {
    let tempString = string;
    let returnString = "";
    returnString += (casing === "toUpper"
      ? tempString.slice(0, 1).toUpperCase()
      : tempString.slice(0, 1).toLowerCase()
    );
    returnString += tempString.slice(1);
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