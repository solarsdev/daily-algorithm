const fs = require('fs');
const input = fs.readFileSync('input').toString().trim();

let n = parseInt(input);
let bags = 0;

while (true) {
  if (n % 5 === 0) {
    console.log(n / 5 + bags);
    break;
  }
  if (n < 0) {
    console.log(-1);
    break;
  }
  n -= 3;
  bags++;
}
