const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim();
const input = fs.readFileSync('input').toString().trim();

const n = parseInt(input);

const checker = (testNum) => {
  if (testNum < 100) {
    return true;
  }
  const numbers = testNum
    .toString()
    .split('')
    .map((number) => parseInt(number));
  const digitSet = new Set();
  for (let i = 1; i < numbers.length; i++) {
    digitSet.add(numbers[i] - numbers[i - 1]);
  }
  return digitSet.size === 1;
};

let count = 0;

for (let i = 1; i <= n; i++) {
  if (checker(i)) {
    count++;
  }
}

console.log(count);
