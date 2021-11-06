문제 : 1~100 까지 덧셈

단순 덧셈  --> O(n) , n이 커지면 커질수록 반복 횟수가 늘어남. n에 비례함.
let s = 0;
for (let i = 1; i < 101; i++) {
  s += i;
}
console.log(s);

// or

// 시그마 공식 n*(n+1)/2  --> O(1) , n에 관계없이 한번만 계산하면 끝.
let n = 100;
for (let i = 1; i < n + 1; i++) {
  s += i;
}
console.log(s / 2);

// 재귀함수
function f(n) {
  if (n <= 1) {
    return 1;
  }
  return n + f(n - 1);
}
console.log(`재귀함수 : ${f(100)}`);

// 문제 : 1~5 까지 곱셈

// 단순 곱셈
let x = 1;
for (let i = 1; i < 6; i++) {
  x *= i;
}
console.log(x);

재귀함수
function f(n) {
  if (n <= 1) {
    return 1;
  }
  return n * f(n - 1);
}
console.log(`재귀함수 : ${f(5)}`);

1 ~ 100 까지 덧셈
