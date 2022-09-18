# Today's Challenge

## Char From ASCII Value

### Description

Write a function get_char() / getChar() which takes a number and returns the corresponding ASCII char for that value.<br>

Example:<br>

get_char(65)<br>
should return:<br>

'A'

#### Solution

```js
function getChar(c) {
  return String.fromCharCode(c);
}
```

## Binary addition excersice

### Description
Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.<br>

The binary number returned should be a string.<br>

Examples:(Input1, Input2 --> Output (explanation)))<br>

1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)<br>
5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)<br>
#### Solution

```js
function addBinary(a, b) {
  return (a + b).toString(2);
}
```

## Student's Final Grade

### Description
Create a function finalGrade, which calculates the final grade of a student depending on two parameters: a grade for the exam and a number of completed projects.<br>

This function should take two arguments: exam - grade for exam (from 0 to 100); projects - number of completed projects (from 0 and above);<br>

This function should return a number (final grade). There are four types of final grades:<br>

100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.<br>
90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.<br>
75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.<br>
0, in other cases

#### Solution

```js
function finalGrade(exam, projects) {
  switch (true) {
    case exam > 90 || projects > 10:
      return 100;
    case exam > 75 && projects >= 5:
      return 90;
    case exam > 50 && projects >= 2:
      return 75;
    default:
      return 0;
  }
}
```
