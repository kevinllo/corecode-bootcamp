/**
 * Your team has just seen the movie "Matrix" and you have been asked, how the number of your year of birth would be written in binary. You must learn how to translate your date of birth into binary and show your team. (Do not use a webpage or a tool to convert your date of birth.
 */
function convertToBinary(number) {
  let binary = "";
  for (let i = number; i > 0; i = parseInt(i / 2)) {
    binary += String(i % 2);
  }
  return bottomTop(binary);
}
function bottomTop(number) {
  let str = "";
  for (let i = number.length - 1; i >= 0; i--) {
    str += number[i];
  }
  return str;
}

function dateBinary(day, month, year) {
  return {
    DAY: convertToBinary(day),
    MONTH: convertToBinary(month),
    YEAR: convertToBinary(year),
  };
}
console.log(dateBinary(29, 3, 2002));
