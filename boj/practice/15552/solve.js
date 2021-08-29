const fs = require('fs');
const input = fs.readFileSync('sample').toString().split('\n');

const n = parseInt(input[0]);
let result = '';

for (let i = 1; i <= n; i++) {
  const nums = input[i].split(' ');
  result += `${parseInt(nums[0]) + parseInt(nums[1])}\n`;
}

console.log(result);
