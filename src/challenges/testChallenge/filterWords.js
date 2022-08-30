function filterWords(words, chars) {
  let filter = [];
  chars = chars.split("");
  for (let i = 0; i < words.length; i++) {
    let current = words[i];
    for (let j = 0; j < chars.length; j++) {
      if (!current.includes(chars[j])) {
        filter.push(current);
      }
    }
  }
  return filter;
}
console.log(filterWords(["the", "dog", "got", "a", "bone"], "ae"));
