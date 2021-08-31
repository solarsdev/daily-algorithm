const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = fs.readFileSync('input').toString().trim().split('\n');

const n = parseInt(input[0]);
const examScores = input[1].split(' ').map((examScore) => parseInt(examScore));

let maxScore = 0;
let sum = 0;

examScores.forEach((examScore) => {
  if (examScore > maxScore) {
    maxScore = examScore;
  }
  sum += examScore;
});

console.log((sum / n / maxScore) * 100);
