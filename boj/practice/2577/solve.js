const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .split('\n')
  .map((num) => parseInt(num));

const targetArray = input
  .reduce((prev, next) => prev * next)
  .toString()
  .split('');
let digitArray = new Array(10).fill(0);

targetArray.forEach((target) => digitArray[target]++);

let result = '';

for (let i = 0; i < digitArray.length; i++) {
  result += `${digit}\n`;
}

console.log(result);
