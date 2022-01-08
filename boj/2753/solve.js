const fs = require('fs');
const year = fs.readFileSync('/dev/stdin').toString().trim();

if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
  console.log('1');
} else {
  console.log('0');
}
