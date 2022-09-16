const characters = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: "188",
    mass: "84",
    eye_color: "blue",
    gender: "male",
  },
];
// Get all the names
const names = characters.map((e) => e.name);
console.log(names);
// Get the total mass of all characters
const totalMass = characters
  .map((e) => Number(e.mass))
  .reduce((prev, curr) => prev + curr, 0);
console.log(totalMass);
// Get characters with mass greater than 100
const filterMass = characters.map((e) => Number(e.mass)).filter((e) => e > 100);
console.log(`Characters with mass greater than 100: ${filterMass}`);
