function countFrequencies(words) {
  words.sort();
  let obj = {};
  for (let w of words) {
    if (!obj[w]) obj[w] = 1;
    else obj[w]++;
  }
  return Object.values(obj)
}

console.log(countFrequencies(["the", "dog", "got", "the", "bone"]));
