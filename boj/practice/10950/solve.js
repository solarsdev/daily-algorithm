const fs = require('fs');
const input = fs.readFileSync('sample').toString().split('\n');

for (let i = 1; i < input.length; i++) {
  const line = input[i].split(' ');
  const a = Number(line[0]);
  const b = Number(line[1]);

  console.log(a + b);
}
