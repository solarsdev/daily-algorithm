const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
const n = parseInt(input);

console.log((n * (n + 1)) / 2);
