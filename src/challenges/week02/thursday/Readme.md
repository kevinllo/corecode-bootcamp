### Challenges

#### Remove All Exclamation Marks From The End Of Sentence

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

#### Vowel Remover

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

#### Rock Paper Scissors!

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

#### Persistent Bugger

```js

```
