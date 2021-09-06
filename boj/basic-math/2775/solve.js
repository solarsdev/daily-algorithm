const input = require('fs').readFileSync('input').toString().split('\n');

const t = parseInt(input[0]);

// 1 5 15 35 70
// 1 4 10 20 35
// 1 3  6 10 15
// 1 2  3  4  5

const getResidenceNum = (k, n) => {
  if (k === 0) {
    return n;
  }
  if (n === 1) {
    return 1;
  }
  return getResidenceNum(k - 1, n) + getResidenceNum(k, n - 1);
};

// 케이스 입력 부분
let ret = '';

for (let i = 1; i < t * 2 + 1; i += 2) {
  const k = parseInt(input[i]);
  const n = parseInt(input[i + 1]);

  ret += getResidenceNum(k, n) + '\n';
}

console.log(ret.trim());
