function solution(arr, k, t) {
  var answer = -1;
  arr.sort((a, b) => a - b);
  let num = 0;
  for (let i = 1; i <= arr.length - k + 1; i++) {
    num += i;
  }
  console.log(num);

  for (let i = 1; i < num + 1; i++) {}

  return answer;
}

let arr = [2, 5, 3, 8, 1];
let k = 3;
let t = 11;

console.log(solution(arr, k, t));

// 012, 013, 014,    123, 124,     234
// 01, 02, 03,    12, 13,    23
// 01, 02, 03, 04,    12,13,14,  23,24,   34,

// 5 - 2 + 1

// 5, 2 -> 4 3 2 1
// 5, 3 -> 3, 2, 1
// 5, 4 -> 2, 1
