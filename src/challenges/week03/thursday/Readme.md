# <center> Today's Challenge

## Fold An Array

### Description

In this kata you have to write a method that folds a given array of integers by the middle x-times.

An example says more than thousand words:

Fold 1-times:
[1,2,3,4,5] -> [6,6,3]

```
A little visualization (NOT for the algorithm but for the idea of folding):

 Step 1         Step 2        Step 3       Step 4       Step5
                     5/           5|         5\
                    4/            4|          4\
1 2 3 4 5      1 2 3/         1 2 3|       1 2 3\       6 6 3
----*----      ----*          ----*        ----*        ----*
```

Fold 2-times:
[1,2,3,4,5] -> [9,6]

#### Solution

```js
function foldArray(array, runs) {
  let fold = [],
    foldFinal = [];
  let times = 0;

  while (times < runs) {
    let front = 0, back = array.length - 1;
    if (array.length % 2 === 0) {
      for (let i = 0; i < (array.length - 1) / 2; i++) {
        fold.push(array[front] + array[back]);
        front++;
        back--;
      }
    } else {
      let pointer = array[(array.length - 1) / 2];
      for (let i = 0; i < (array.length - 1) / 2; i++) {
        fold.push(array[front] + array[back]);
        front++;
        back--;
      }
      fold.push(pointer);
    }
    array = [];
    array = fold;
    foldFinal = fold;
    fold = [];
    times++;
  }
  return foldFinal;
}
```

## Encrypt This!

### Description

Encrypt this!

You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

Your message is a string containing space separated words.
You need to encrypt each word in the message using the following rules:

- The first letter must be converted to its ASCII code.

- The second letter must be switched with the last letter.

Keepin' it simple: There are no special characters in the input.

#### Solution

```js
var encryptThis = function (text) {
  text = text
    .split(" ")
    .map((element) => {
      if (element.length === 1) return element.charCodeAt(0);
      if (element.length === 2) return `${element.charCodeAt(0)}${element[1]}`;
      return `${element.charCodeAt(0)}${
        element[element.length - 1]
      }${element.slice(2, element.length - 1)}${element[1]}`;
    })
    .join(" ");
  return text;
};
```
