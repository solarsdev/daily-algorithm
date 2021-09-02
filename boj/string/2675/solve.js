const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const input = fs.readFileSync('input').toString().trim().split('\n');

let result = '';

for (let i = 1; i < input.length; i++) {
  const [repeat, caseString] = input[i].split(' ');
  caseString.split('').forEach((s) => {
    result += s.repeat(parseInt(repeat));
  });
  result += '\n';
}

console.log(result.trim());
