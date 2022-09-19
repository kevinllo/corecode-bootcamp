# <center> Today's Challenge

## Simple Pig Latin

### Description

Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
<br>

Examples: <br>
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay<br>
pigIt('Hello world !'); // elloHay orldway !<br>

#### Solution

```js
function pigIt(str) {
  let newWord = "",
    symbol = "";
  str = str.split(" ");
  if (str[str.length - 1].match(/[/!//?/]/) !== null) symbol = str.pop();

  for (let word of str) {
    newWord += `${word.substring(1, word.length)}${word.substring(1, 0)}ay `;
  }

  return symbol.length >= 1 ? `${newWord.trim()} ${symbol}` : newWord.trim();
}
```

## Counting Duplicates

### Description

Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.<br>

Example<br>
"abcde" -> 0 # no characters repeats more than once<br>
"aabbcde" -> 2 # 'a' and 'b'<br>
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)<br>
"indivisibility" -> 1 # 'i' occurs six times<br>
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'<br>
"ABBA" -> 2 # 'A' and 'B' each occur twice<br>

#### Solution

```js
function duplicateCount(text) {
  if (text.length === 0) return 0;
  let obj = {},
    count = 0;
  text = text.toLowerCase();

  for (let i = 0; i < text.length; i++) {
    if (!obj[text[i]]) obj[text[i]] = 1;
    else obj[text[i]]++;
  }
  for (let t in obj) {
    if (obj[t] > 1) count++;
  }

  return count;
}
```

## Decode the Morse Code

### Description
In this kata you have to write a simple Morse code decoder. While the Morse code is now mostly superseded by voice and digital data communication channels, it still has its use in some applications around the world.

The Morse code encodes every character as a sequence of "dots" and "dashes". For example, the letter A is coded as ·−, letter Q is coded as −−·−, and digit 1 is coded as ·−−−−. The Morse code is case-insensitive, traditionally capital letters are used. When the message is written in Morse code, a single space is used to separate the character codes and 3 spaces are used to separate words. For example, the message HEY JUDE in Morse code is ···· · −·−−   ·−−− ··− −·· ·.

NOTE: Extra spaces before or after the code have no meaning and should be ignored.

In addition to letters, digits and some punctuation, there are some special service codes, the most notorious of those is the international distress signal SOS (that was first issued by Titanic), that is coded as ···−−−···. These special codes are treated as single special characters, and usually are transmitted as separate words.

Your task is to implement a function that would take the morse code as input and return a decoded human-readable string.

For example:

decodeMorse('.... . -.--   .--- ..- -.. .')
//should return "HEY JUDE"
#### Solution

```js
decodeMorse = function (morseCode) {
  let response = "", count = 0;
  morseCode = morseCode.trim();
  morseCode = morseCode.split(" ");
  for (let word of morseCode) {
    if (count === 2) {
      response += " ";
      count = 0;
    }
    if (MORSE_CODE[word]) {
      response += MORSE_CODE[word];
    } else {
      count++;
    }
  }
  return response;
};
```
NOTE: <b>They already provide us with the MORSE_CODE dictionary preloaded in the KATA. </b>
