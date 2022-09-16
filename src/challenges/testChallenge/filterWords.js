function filterWords(words, chars) {
  let filter = [];
  chars = chars.split("");
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < chars.length; j++) {
      if (words[i].includes(chars[j])) {
        filter.push(words[i]);
      }
    }
  }
  return filter;
}
console.log(filterWords(["the", "dog", "got", "a", "bone"], "ae"));
