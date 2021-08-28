const fs = require('fs');
const input = fs.readFileSync('input').toString().split('\n');

const n = parseInt(input[0]);
const numbers = input[1].split(' ');

let min = 1000001;
let max = -1000001;

numbers.forEach((number) => {
  const num = parseInt(number);
  if (num < min) {
    min = num;
  }
  if (num > max) {
    max = num;
  }
});

console.log(`${min} ${max}`);
