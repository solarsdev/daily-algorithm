const fs = require('fs');
const input = fs.readFileSync('input').toString().trim();

const x = parseInt(input);

// 1
// 1 ~ 2
// 1 ~ 3

let prevLineCount = 0;
let count = 1;
let line = 1;

while (x > count) {
  prevLineCount = count;
  count += ++line;
}

const move = x - prevLineCount;
console.log(move);

if (line % 2 === 0) {
  console.log(`${move}/${line - move + 1}`);
} else {
  console.log(`${line - move + 1}/${move}`);
}
