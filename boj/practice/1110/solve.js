const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString();
const input = fs.readFileSync('input').toString();

const N = parseInt(input);

let a = Math.floor(N / 10);
let b = N % 10;

let i = 0;

while (true) {
  i++;
  let result = b.toString() + ((a + b) % 10);

  if (parseInt(result) === N) {
    console.log(i);
    break;
  }

  a = b;
  b = result % 10;
}
