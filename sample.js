// 1부터 n까지의 합을 계산하는 반복 함수와 재귀 함수
// 필수 조건: n >= 1
// 결과: 1부터 n까지의 합을 반환한다.
const sum = (n) => {
  let ret = 0;
  for (let i = 1; i <= n; ++i) {
    ret += i;
  }
  return ret;
};
// 필수 조건: n >= 1
// 결과: 1부터 n까지의 합을 반환한다.
const recursiveSum = (n) => {
  if (n === 1) {
    return 1;
  }
  return n + recursiveSum(n - 1);
};

console.log(sum(10));
console.log(recursiveSum(10));
