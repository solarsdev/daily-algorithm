const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('');

const result = new Array(26).fill(-1);

for (let i = 0; i < result.length; i++) {
  result[i] = input.indexOf(String.fromCharCode(97 + i));
}

console.log(result.join(' '));
