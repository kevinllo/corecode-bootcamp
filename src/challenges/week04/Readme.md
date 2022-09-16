## <center>Javascript ES6 features

ECMAScript is a general-purpose programming language that is implemented in Javascript and some other languages. Basically it tells us how to write Javascript code across all platforms.

Think of ECMAScript as Javascript without a host environment. Javascript has two major environments: <mark> browsers and Node.js</mark>. These environments add some APIs to the language. An example is the window object on Browsers and the fs module in Node.js. If you strip all external APIs from these environments, you get ECMAScript (Pure Javascript).

ECMASCRIPT gets updated almost every year. However, In ES6(the 6th edition) some features were introduced to improve Javascript functionality. Some of them are templates, arrow functions, rest/spread operator, destructuring and some more. We're going to take a look at all of them.

## Var, let, const

One of the features that came with ES6 is the addition of let and const, which can be used for variable declaration. The question is, what makes them different from var which we've been using?

Before getting into it. We have to understand what a scope in Javascript is. <strong>Scope</strong> essentially means where these variables are available for use. var declarations are globally scoped or function/locally scoped.

The scope is global when a var variable is declared outside a function. This means that any variable that is declared with var outside a function block is available for use in the whole window.

<strong>var</strong> is function scoped when it is declared within a function. This means that it is available and can be accessed only within that function.

To understand further, look at the example below.

```js
var greeter = "hey hi";

function newFunction() {
  var hello = "hello";
}
```

<strong>greater</strong> is globally scoped because it exists outside a function while <strong>hello</strong> is function scoped. So we cannot access the variable <strong>hello</strong> outside of a function. So if we do this:

```js
var tester = "hey hi";

function newFunction() {
  var hello = "hello";
}
console.log(hello); // error: hello is not defined
```

We got an error because hello is not accessible outside of the function, just within.

### The problem with Var

There's a weakness that comes with var. I'll use the example below to explain:

```js
var greeter = "hey hi";
var times = 4;

if (times > 3) {
  var greeter = "say Hello instead";
}

console.log(greeter); // "say Hello instead"
```

So, since times > 3 returns true, greeter is redefined to "say Hello instead". While this is not a problem if you knowingly want greeter to be redefined, it becomes a problem when you do not realize that a variable greeter has already been defined before.

If you have used greeter in other parts of your code, you might be surprised at the output you might get. This will likely cause a lot of bugs in your code. <strong>This is why let and const are necessary.</strong>

### Let

<strong>let</strong> comes to improve <strong>var</strong> declarations. Var lets you redeclare a variable and that can cause changes in the code that were not thought to do it in the first place. <br>
Let is block scoped. A block is a chunk of code bounded by {}. A block lives in curly braces. Anything within curly braces is a block.<br>
So a variable declared in a block with let is only available for use within that block. Let me explain this with an example:

```js
let greeting = "say Hi";
let times = 4;

if (times > 3) {
  let hello = "say Hello instead";
  console.log(hello); // "say Hello instead"
}
console.log(hello); // hello is not defined
```

We see that using hello outside its block (the curly braces where it was defined) returns an error. This is because let variables are block scoped .

### Const

It behaves exactly like let. The only difference is that in let you can change the value of your variable but no with const.
<br>
If we try to do this we'll get an error.

```js
const gretting = "Hello World";
gretting = "Hello folks"; // you cant modify the value of greeting
```

## Templates strings

They are literals delimited with backtick (`) characters, allowing for multi-line strings, for string interpolation with embedded expressions, and for special constructs called tagged templates.<br>
Along with having normal strings, template literals can also contain other parts called placeholders, which are embedded expressions delimited by a dollar sign and curly braces: ${expression}. The strings and placeholders get passed to a function — either a default function, or a function you supply. The default function (when you don't supply your own) just performs string interpolation to do substitution of the placeholders and then concatenate the parts into a single string.

```js
const name = "Kevin";
const age = 20;
console.log(`My name is ${name} and I'm ${age}.`); // My name is Kevin and I'm 20.
```

## Arrow functions

They let us write functions using less line of code, but is limited and can't be used in all situations.
<br>
There are differences between arrow functions and traditional functions, as well as some limitations:

- Arrow functions don't have their own bindings to <b>this</b>, <b>super</b> or <b>arguments</b>.
- Arrow functions don't have access to the new.target keyword.
- Arrow functions aren't suitable for call, apply and bind methods, which generally rely on establishing a scope.
- Arrow functions cannot be used as constructors.
- Arrow functions cannot use yield, within its body.
  <br>

#### Syntax

```js
const materials = [
 'Hydrogen',
 'Helium',
 'Lithium',
 'Beryllium'
];

const response = materials.map(material => material.length); // [Array [8, 6, 7, 9]]

```

## Rest/Spread operator

## Destructuring assignment

## Array Methods
