const input = require('fs').readFileSync('input').toString().split('\n');

const t = parseInt(input[0]);

// 1 5 15 35 70
// 1 4 10 20 35
// 1 3  6 10 15
// 1 2  3  4  5

// 케이스 입력
for (let i = 1; i < t * 2 + 1; i += 2) {
  const k = input[i];
  const n = input[i + 1];

  let rooms = new Array(n + 1);
  for (let j = 1; j < n + 1; j++) {
    rooms[j] = j;
  }
}
