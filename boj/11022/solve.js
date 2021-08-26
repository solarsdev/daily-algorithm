const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const T = parseInt(input[0]);

for (let i = 1; i <= T; i++) {
  const nums = input[i].split(' ');
  console.log(`Case #${i}: ${nums[0]} + ${nums[1]} = ${parseInt(nums[0]) + parseInt(nums[1])}`);
}
