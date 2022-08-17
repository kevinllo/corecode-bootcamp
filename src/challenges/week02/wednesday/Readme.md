### Challenges

#### Char From ASCII Value

```js
function getChar(c) {
  return String.fromCharCode(c);
}
```

#### Binary addition excersice

```js
function addBinary(a, b) {
  return (a + b).toString(2);
}
```

#### Student's Final Grade

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
