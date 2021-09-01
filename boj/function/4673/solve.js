const calc = (n) => {
  return (
    n +
    n
      .toString()
      .split('')
      .map((num) => parseInt(num))
      .reduce((prev, curr) => prev + curr)
  );
};

const selfNumbers = new Array(10000).fill(true);

for (let i = 0; i < 10000; i++) {
  selfNumbers[calc(i)] = false;
}

let result = '';

for (let i = 0; i < 10000; i++) {
  if (selfNumbers[i]) {
    result += i + '\n';
  }
}

console.log(result.trim());
