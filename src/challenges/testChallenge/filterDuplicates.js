function filterD(array) {
  return new Set([...array]);
}

console.log(filterD([7, 6, 4, 3, 3, 4, 9]));
// another solution

function filterA(numbers) {
  const uniqueNumbers = {};
  const result = [];
  for (let items of numbers) {
    if (!uniqueNumbers[items]) {
      uniqueNumbers[items] = items;
      result.push(items);
    }
  }
  return result;
}

console.log(filterA([7, 6, 4, 3, 3, 4, 9]));
