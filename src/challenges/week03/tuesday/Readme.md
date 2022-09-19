# <center> Today's Challenge

## Simple Pig Latin

### Description

Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
<br>

Examples: <br>
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay<br>
pigIt('Hello world !'); // elloHay orldway !<br>

#### Solution

```js
function pigIt(str) {
  let newWord = "", symbol = "";
  str = str.split(" ");
  if (str[str.length - 1].match(/[/!//?/]/) !== null) symbol = str.pop();

  for (let word of str) {
    newWord += `${word.substring(1, word.length)}${word.substring(1, 0)}ay `;
  }

  return symbol.length >= 1 ? `${newWord.trim()} ${symbol}` : newWord.trim();
}
```
## Counting Duplicates
### Description
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.<br>

Example<br>
"abcde" -> 0 # no characters repeats more than once<br>
"aabbcde" -> 2 # 'a' and 'b'<br>
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)<br>
"indivisibility" -> 1 # 'i' occurs six times<br>
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'<br>
"ABBA" -> 2 # 'A' and 'B' each occur twice<br>

#### Solution 

```js
function duplicateCount(text){
    
  if(text.length === 0) return 0;
  let obj = {}, count = 0;
  text = text.toLowerCase();

  for(let i = 0; i<text.length;i++){
    if(!obj[text[i]]) obj[text[i]] = 1;
    else obj[text[i]]++;
  }
  for(let t in obj){
    if(obj[t]>1) count++;
  }

  return count;

}
```

