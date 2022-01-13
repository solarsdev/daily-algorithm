const fs = require('fs');
const input = fs.readFileSync('input').toString().trim().split(' ');

const fixedCost = parseInt(input[0]);
const variableCost = parseInt(input[1]);
const price = parseInt(input[2]);

if (variableCost >= price) {
  console.log(-1);
  return;
}

const primeCost = price - variableCost;

console.log(Math.floor(fixedCost / primeCost) + 1);
