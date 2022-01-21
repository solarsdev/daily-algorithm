const input = require('fs')
  .readFileSync('input')
  .toString()
  .split(' ')
  .map((num) => parseInt(num));

console.log(input[0] + input[1]);
