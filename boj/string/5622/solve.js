const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().toUpperCase();
const input = fs.readFileSync('input').toString().trim().split('');

const dial = ['ABC', 'DEF', 'GHI', 'JKL', 'MNO', 'PQRS', 'TUV', 'WXYZ'];

const findDialIndex = (str) => {
  for (let i = 0; i < dial.length; i++) {
    const result = dial[i].indexOf(str);
    if (result !== -1) {
      return i;
    }
  }
  return -1;
};

let result = 0;

input.forEach((str) => (result += findDialIndex(str) + 3));

console.log(result);
