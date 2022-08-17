/**
 * 
 * Your task is to sort a given string. Each word in the string will contain a single number.
 * This number is the position the word should have in the result.
 * 
Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. 
The words in the input String will only contain valid consecutive numbers.

TEST:
"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  ""
 */

function order(words) {
  if (words.length === 0) return "";
  words = words.split(" ").sort((a, b) => getNumber(a) - getNumber(b));
  return words;
}

function getNumber(str) {
  return str.match(/\d/)[0]; 
}
function order(words) {
  words = words.split(" ");
  var arrayNew = [];
  var oneWord = "";

  for (let i = 0; i < words.length; i++) {
    oneWord = words[i];
    for (let j = 0; j < oneWord.length; j++) {
      var letra = parseInt(oneWord[j]);
      if (!isNaN(letra)) {
        arrayNew[letra - 1] = words[i];
      }
    }
  }

  return arrayNew.join(" ");
}
order("is2 Thi1s T4est 3a");

/* console.log(order("is2 Thi1s T4est 3a"));  */ // output: Thi1s is2 3a T4est
/* console.log(order("4of Fo1r pe6ople g3ood th5e the2"));  */ // output: Fo1r the2 g3ood 4of th5e pe6ople
/* console.log(getNumber("is2 Thi1s T4est 3a")); */
