function filterWords(words, chars) {
  let filter = [];
  chars = chars.split("");
  for (let i = 0; i < words.length; i++) {
    let current = words[i];
    for (let j = 0; j < chars.length; j++) {
      let lastCheck = "";
      if (current.includes(chars[j]) && lastCheck !== current) {
        filter.push(current);
      }
      lastCheck = current;
    }
  }
  return filter;
}
console.log(filterWords(["cat", "bt", "hat", "tree"], "atach"));
