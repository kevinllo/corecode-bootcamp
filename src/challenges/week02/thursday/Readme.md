# Today's Challenge

## Remove All Exclamation Marks From The End Of Sentence

### Description
Remove all exclamation marks from the end of sentence.<br>

Examples <br>
remove("Hi!") === "Hi"<br>
remove("Hi!!!") === "Hi"<br>
remove("!Hi") === "!Hi"<br>
remove("!Hi!") === "!Hi"<br>
remove("Hi! Hi!") === "Hi! Hi"<br>
remove("Hi") === "Hi"<br>

#### Solution:
```js
function remove(string) {
  let len = string.length;
  for (let i = string.length - 1; i >= 0; i--) {
    if (string[i] === "!") len--;
    if (string[i] !== "!") break;
  }
  return string.substring(0, len);
}
```

## Vowel Remover
### Description
Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.
<br>
Examples<br>
"hello"     -->  "hll"<br>
"codewars"  -->  "cdwrs"<br>
"goodbye"   -->  "gdby"<br>
"HELLO"     -->  "HELLO"<br>
don't worry about uppercase vowels
y is not considered a vowel for this kata <br><br>

#### Solution:
```js
function shortcut(string) {
  const vowels = {
    a: "a",
    e: "e",
    i: "i",
    o: "o",
    u: "u",
  };
  let newWord = "";

  for (let i = 0; i < string.length; i++) {
    if (!vowels[string[i]]) newWord += string[i];
  }
  return newWord;
}
```

## Rock Paper Scissors!
### Description
Let's play! You have to return which player won! In case of a draw return Draw!.

Examples(Input1, Input2 --> Output):

"scissors", "paper" --> "Player 1 won!"<br>
"scissors", "rock" --> "Player 2 won!"<br>
"paper", "paper" --> "Draw!"<br><br>
#### Solution: 
```js
const rps = (p1, p2) => {
  switch (true) {
    case p1 === "scissors" && p2 === "paper":
      return "Player 1 won!";
    case p1 === "scissors" && p2 === "rock":
      return "Player 2 won!";
    case p1 === "paper" && p2 === "scissors":
      return "Player 2 won!";
    case p1 === "paper" && p2 === "rock":
      return "Player 1 won!";
    case p1 === "rock" && p2 === "paper":
      return "Player 2 won!";
    case p1 === "rock" && p2 === "scissors":
      return "Player 1 won!";
    default:
      return "Draw!";
  }
};
```

## Persistent Bugger
### Description
Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

For example (Input --> Output):

39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)<br>
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)<br>
4 --> 0 (because 4 is already a one-digit number)
<br><br>
#### Solution: 
```js
function persistence(num) {
  let result = 0,
    counterDigit = 0;
  num = splitNumbers(num); //array of numbers
  if (num.length === 0) return 0;
  while (num.length > 1) {
    result = num.reduce((m, n) => m * n);
    num = splitNumbers(result);
    counterDigit++;
  }
  return counterDigit;
}

function splitNumbers(num) {
  return String(num)
    .split("")
    .map((e) => Number(e));
}
```
