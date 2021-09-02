const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
const input = fs.readFileSync('input').toString().trim();

if (input.length === 0) {
  console.log(0);
} else if (input.length === 1) {
  console.log(1);
} else {
  console.log(input.split(' ').length);
}
