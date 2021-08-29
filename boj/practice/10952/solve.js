const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

let i = 0;

while (input[i] !== '0 0') {
  const [A, B] = input[i].split(' ');
  console.log(parseInt(A) + parseInt(B));
  i++;
}
