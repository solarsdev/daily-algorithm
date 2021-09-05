const input = require('fs').readFileSync('input').toString().split(' ');

const climb = parseInt(input[0]);
const slip = parseInt(input[1]);
const totalTrip = parseInt(input[2]);

const perDay = climb - slip;
console.log(Math.min(Math.ceil((totalTrip - slip) / perDay), Math.ceil(totalTrip / perDay)));
