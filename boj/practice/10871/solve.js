const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const input = fs.readFileSync('sample').toString().split('\n');

const [N, X] = input[0].split(' ');
const numbers = input[1].split(' ').filter((number) => parseInt(number) < parseInt(X));

console.log(numbers.join(' '));
