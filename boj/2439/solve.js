const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const N = parseInt(input);

for (let i = 1; i <= N; i++) {
  let stars = '';
  for (let j = 1; j <= N; j++) {
    stars += N - i >= j ? ' ' : '*';
  }
  console.log(stars);
}
