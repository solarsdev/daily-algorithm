const fs = require('fs');
const times = fs.readFileSync('/dev/stdin').toString().trim();

for (let i = 1; i <= 9; i++) {
  console.log(`${times} * ${i} = ${times * i}`);
}
