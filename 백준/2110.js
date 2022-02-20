function solution(arr, n) {
  arr.sort((a, b) => a - b);
  // arr = arr.map((v) => v - arr[0] + 1);
  console.log(arr);
  let min = arr[0];
  let max = arr[arr.length - 1];
  let answer = 0;

  let prev = arr[0];
  while (min <= max) {
    mid = Math.floor((min + max) / 2);
    let cnt = 1;
    prev = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] >= prev + mid) {
        cnt++;
        prev = arr[i];
      }
    }
    if (cnt < n) {
      max = mid - 1;
    } else {
      min = mid + 1;
      if (mid > answer) {
        answer = mid;
      }
    }
  }
  console.log(answer);
}

[1, 2, 4, 8, 9];
let arr = [1, 2, 8, 4, 9];
const n = 3;
console.log(solution(arr, n));
