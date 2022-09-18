# <center> Today's Challenge
---
## ASCII Total
### Description
You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all ASCII characters.<br>

Examples:<br>

uniTotal("a") == 97 <br>uniTotal("aaa") == 291
#### Solution:

```js
function uniTotal(string) {
  let sum = 0;
  for (let i = 0; i < string.length; i++) {
    sum += string.charCodeAt(i);
  }
  return sum;
}
```
## Multiply excersice

### Description
This code does not execute properly. Try to figure out why.
#### Solution:

```js
function multiply(a, b) {
  return a * b;
}
```
