const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString();

const n = parseInt(input);
let result = '';

for (let i = n; i >= 1; i--) {
  result += `${i}\n`;
}

console.log(result);
