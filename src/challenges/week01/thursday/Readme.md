# <center> Today's Challenge

1. Print special numbers
2. Bad Code
3. Bad Code 2

---

## Print special numbers

### Descripcion

In this exercise you must use an iterative flow control to be able to print all the even numbers in the range of numbers from 0 to 100. Remember that you should not print each number, you should use a flow control structure to perform the exercise.

```js
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) console.log(i);
}
```

---

<br>

## Bad Code

### Descripcion

The code shown below is not working in the right way, as a task you must find the error made by the developer who programmed this code and correct it, for this exercise you must explain what the error is and place the correct code.

```js
var cond = false;

if ((cond = true)) {
  console.log("The cond variable is true");
} else {
  console.log("The cond variable is false");
}
```

The developer could have forgotten that just one equal represents assignation to a certain value. <b>If statament</b> expects to evaluate a boolean condition. We can only get it with double equal or triple depending on our needs. If we want it to evaluate besides the condition the type of both variables we use triple equal, if not, double.

### Refactoring:

```js
var cond = false;

if (cond == true) {
  console.log("The cond variable is true");
} else {
  console.log("The cond variable is false");
}
```

---

## Bad Code 2

### Description

You must create the code that follows the following logic, if the given number is 100, take this number as special and show the following message: "This is a special number!", but if the number is less than 1000, multiple of 10 and different from 100, you must show the following message: "This number is almost special". if none of the given conditions are met show the following message: "Just a regular number". Another developer was trying to program the logic, but apparently couldn't, you need to fix the code to work properly.

```js
var n = 100;

if (n == 100) {
  console.log("This is a special number!");
}
if (n < 1000 && n%10 == 0 && n 1!= 100) {
  console.log("This number is almost special");
} else {
  console.log("Just a regular number");
}
if (n % 10 == 0) {
  console.log("This number is multiple of 10");
}
```

The developer almost got it! he just needed to add more AND operators to match the condition of number less than 1000, multiple of 10 and different from 100.

### Refactoring: 

```js
var n = 100;

if (n == 100) {
  console.log("This is a special number!");
}
if (n < 1000 && n % 10 === 0 && n !== 100) {
  console.log("This number is almost special");
} else {
  console.log("Just a regular number");
}
if (n % 10 == 0) {
  console.log("This number is multiple of 10");
}
```