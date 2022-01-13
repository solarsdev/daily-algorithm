const fs = require('fs');
const input = fs.readFileSync('input').toString().trim().split('\n');

let count = 0;

for (let i = 1; i < input.length; i++) {
  let testStr = input[i];

  while (testStr.length > 0) {
    const testChar = testStr[0];
    if (
      testStr
        .slice(testStr.indexOf(testChar), testStr.lastIndexOf(testChar))
        .split(testChar)
        .join('').length !== 0
    ) {
      break;
    }
    testStr = testStr.split(testChar).join('');

    if (testStr.length === 0) {
      count++;
    }
  }
}

console.log(count);
