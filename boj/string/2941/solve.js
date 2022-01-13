const fs = require('fs');
const input = fs.readFileSync('input').toString().trim();

const croatianAlphabet = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];

const getCountCroatianAlphabet = (s) => {
  let count = 0;
  let str = s;

  for (let i = 0; i < croatianAlphabet.length; i++) {
    let split = str.split(croatianAlphabet[i]);
    count += split.length - 1;
    str = split.join(' ');
  }

  str = str.split(' ').join('');
  return count + str.length;
};

console.log(getCountCroatianAlphabet(input));
