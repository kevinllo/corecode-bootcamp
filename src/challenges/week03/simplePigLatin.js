/**
 *
 * Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
 */

//1. Split the array
//2. Remove first letter and move it to the end of it
//3. Add "ay" to the end of each word.
//--------------
//RESTRICTIONS
//1. do not touch punctuation marks

function pigIt(str) {
  str = str.split(" ");
  let wordCompleted = "";
  let punctuation = {
    "!": "!",
    "?": "?",
    "}": "}",
    "{": "{",
    "(": "(",
    ")": ")",
    "[": "[",
    "]": "]",
  };
  for (let i = 0; i < str.length; i++) {
    let firstWord = str[i].substring(1, 0);
    let mergedWord = `${str[i].substring(1, str[i].length)}${firstWord}ay`;
    if (!punctuation[mergedWord[0]]) {
      wordCompleted += mergedWord + " ";
    } else {
      wordCompleted += mergedWord.substring(1, 0);
    }
  }

  return wordCompleted.trim();
}
console.log(pigIt("Pig latin is cool")); // igPay atinlay siay oolcay
console.log(pigIt("Hello world !")); // elloHay orldway !
