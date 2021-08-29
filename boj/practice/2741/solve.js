const fs = require('fs');
const input = fs.readFileSync('sample').toString();

const n = parseInt(input);
let result = '';

for (let i = 1; i <= n; i++) {
  result += `${i}\n`;
}

console.log(result);
