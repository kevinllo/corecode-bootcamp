
function decodeMorse(morseCode) {
  const morse = {
    ".-": "A",
    "-...": "B",
    "-.-.": "C",
    "-..": "D",
    ".": "E",
    "..-.": "F",
    "--.": "G",
    "....": "H",
    "..": "I",
    ".---": "J",
    "-.-": "K",
    ".-..": "L",
    "--": "M",
    "-.": "N",
    "---": "O",
    ".--.": "P",
    "--.-": "Q",
    ".-.": "R",
    "...": "S",
    "-": "T",
    "..-": "U",
    "...-": "V",
    ".--": "W",
    "-..-": "X",
    "-.--": "Y",
    "---..": "Z",
    "..--..": "?",
    "-.-.--": "!",
    ".-.-.-": ".",
    "···−−−···": "SOS",
  };
  let response = "";
  let count = 0;
  morseCode = morseCode.trim();
  morseCode = morseCode.split(" ");
  for (let word of morseCode) {
    if (count === 2) {
      response += " ";
      count = 0;
    }
    if (morse[word]) {
      response += morse[word];
    } else {
      count++;
    }
  }
  return response;
}
console.log(decodeMorse(".... . -.--   .--- ..- -.. ."));
console.log(decodeMorse("···−−−···"));
