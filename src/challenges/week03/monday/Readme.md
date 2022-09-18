# Today's Challenge

## Who likes it?

### Description

You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.<br>

Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:<br>

[] --> "no one likes this"<br>
["Peter"] --> "Peter likes this"<br>
["Jacob", "Alex"] --> "Jacob and Alex like this"<br>
["Max", "John", "Mark"] --> "Max, John and Mark like this"<br>
["Alex", "Jacob", "Mark", "Max"] --> "Alex, Jacob and 2 others like this"<br>
Note: For 4 or more names, the number in "and 2 others" simply increases.<br>

#### Solution

```js
function likes(names) {
  switch (true) {
    case names.length === 1:
      return `${names[0]} likes this`;
    case names.length === 2:
      return `${names[0]} and ${names[1]} like this`;
    case names.length === 3:
      return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    case names.length >= 4:
      return `${names[0]}, ${names[1]} and ${
        names.length - 2
      } others like this`;
    default:
      return "no one likes this";
  }
}
```

## Big Counting

### Description

Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.<br>

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case.

#### Solution

```js
var countBits = function (n) {
  let binary = n.toString(2);
  return binary
    .split("")
    .map((e) => Number(e))
    .filter((e) => e !== 0).length;
};
```

## You order, please

### Description

Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.<br>

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).<br>

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.<br>
Examples: <br>
"is2 Thi1s T4est 3a" --> "Thi1s is2 3a T4est"<br>
"4of Fo1r pe6ople g3ood th5e the2" --> "Fo1r the2 g3ood 4of th5e pe6ople"<br>
"" --> ""

#### Solution

```js
function order(words) {
  if (words.length === 0) return "";
  let number = 0;
  let obj = {};
  words = words.split(" ");
  for (let word of words) {
    number = word.match(/\d/g)[0];
    obj[number] = word;
  }
  return Object.values(obj).join(" ");
}
```
