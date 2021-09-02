const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().toUpperCase();
const input = fs.readFileSync('input').toString().trim().toUpperCase();

const strArr = input.split('');

let winnerChar = '?';
let winnerCnt = 0;

const charCnt = new Array(26).fill(0);

strArr.forEach((str) => {
  const arrNum = str.charCodeAt(0) - 65;
  const currCnt = ++charCnt[arrNum];
  if (currCnt == winnerCnt) {
    winnerChar = '?';
  } else if (currCnt > winnerCnt) {
    winnerCnt = currCnt;
    winnerChar = str;
  }
});

console.log(winnerChar);
