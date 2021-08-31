const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = fs.readFileSync('input').toString().trim().split('\n');

let result = '';

for (let i = 1; i < input.length; i++) {
  let caseNum = input[i].split(' ').map((c) => parseInt(c));
  const studentNum = caseNum[0];
  caseNum = caseNum.slice(1);
  const avgScore = caseNum.reduce((prev, curr) => prev + curr) / studentNum;
  const ratio = (caseNum.filter((num) => num > avgScore).length / studentNum) * 100;
  result += ratio.toFixed(3) + '%';

  if (i !== input.length - 1) {
    result += '\n';
  }
}

console.log(result);
