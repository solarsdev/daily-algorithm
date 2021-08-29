const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
// const input = fs.readFileSync('input').toString().split('\n');

let max = 0;
let position = 0;

for (let i = 0; i < input.length; i++) {
  const num = parseInt(input[i]);
  if (num > max) {
    max = num;
    position = i;
  }
}

console.log(`${max}\n${position + 1}`);
