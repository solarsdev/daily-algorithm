const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split(' ');

const h = parseInt(input[0]);
const m = parseInt(input[1]);

let alarmMinute = m - 45;

if (alarmMinute >= 0) {
  console.log(`${h} ${alarmMinute}`);
  return;
}

let alarmHour = h - 1;
alarmMinute += 60;

if (alarmHour >= 0) {
  console.log(`${alarmHour} ${alarmMinute}`);
  return;
}

alarmHour += 24;
console.log(`${alarmHour} ${alarmMinute}`);
