function filterD(array) {
  return new Set([...array]);
}

console.log(filterD([7, 6, 4, 3, 3, 4, 9]));
// another solution

function filterA(numbers) {
  const uniqueNumbers = {};
  for (let items of numbers) {
    if (!uniqueNumbers[items]) uniqueNumbers[items] = items;
  }
  return Object.values(uniqueNumbers);
}

console.log(filterA([7, 6, 4, 3, 3, 4, 9]));
