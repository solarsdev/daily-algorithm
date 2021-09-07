const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [currentHour, currentMinute] = input[0]
  .split(' ')
  .map((num) => parseInt(num));
const timeleftToCook = parseInt(input[1]);

const cookMinute = (currentMinute + timeleftToCook) % 60;
const cookHour =
  (currentHour + Math.floor((currentMinute + timeleftToCook) / 60)) % 24;

console.log(`${cookHour} ${cookMinute}`);
