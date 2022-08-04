### <center>Javascript Behaviour</center>

#### Monday (Challenges)
#### Tuesday (Challenges)
#### Wednesday (Challenges)

1. Simple Pig Latin 
```js

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

```
#### Thursday (Challenges)
