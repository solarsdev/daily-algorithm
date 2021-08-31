const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = fs.readFileSync('input').toString().trim().split('\n');

let result = '';

for (let i = 1; i < input.length; i++) {
  result += input[i]
    .split('X')
    .map((answer) => (answer.length * (answer.length + 1)) / 2)
    .reduce((prev, curr) => prev + curr);

  if (i !== input.length - 1) {
    result += '\n';
  }
}

console.log(result);
