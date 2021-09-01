const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const result = input[1]
  .split('')
  .map((num) => parseInt(num))
  .reduce((prev, curr) => prev + curr);
console.log(result);
