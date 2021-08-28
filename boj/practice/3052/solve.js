const fs = require('fs');
const inputs = fs
  .readFileSync('input')
  .toString()
  .trim()
  .split('\n')
  .map((num) => parseInt(num));

let digitTable = new Set();
inputs.forEach((input) => digitTable.add(input % 42));
console.log(digitTable.size);
