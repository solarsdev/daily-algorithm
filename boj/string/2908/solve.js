const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().toUpperCase();
const input = fs.readFileSync('input').toString().trim().split(' ');

const a = input[0].split('').reverse().join('');
const b = input[1].split('').reverse().join('');

console.log(a > b ? a : b);
