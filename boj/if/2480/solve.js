const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map((num) => parseInt(num));

const diceNumbers = new Set();
let duplicatedNumber = -1;
let maxNumber = -1;

input.forEach((num) => {
  if (diceNumbers.has(num)) {
    duplicatedNumber = num;
  }
  if (num > maxNumber) {
    maxNumber = num;
  }
  diceNumbers.add(num);
});

let prize = 0;

switch (diceNumbers.size) {
  case 1:
    prize = 10000 + duplicatedNumber * 1000;
    break;
  case 2:
    prize = 1000 + duplicatedNumber * 100;
    break;
  case 3:
    prize = maxNumber * 100;
    break;
}

console.log(prize);
