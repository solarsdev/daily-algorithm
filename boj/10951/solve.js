const fs = require('fs');
const input = fs.readFileSync('input').toString().split('\n');

let i = 0;

while (i < input.length - 1) {
  const [A, B] = input[i].split(' ');
  console.log(parseInt(A) + parseInt(B));
  i++;
}
