var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const gg = input.shift()
let [aa, n] = gg.split(" ")
n = Number(n)
input.map(i=>parseInt(i));
input.sort((a, b) => a - b);
input = input.map(v=>v-input[0]+1)
  let min = input[0];
  let max = input[input.length-1]
  let answer = 0;
  //let prev = input[0];
  while (min <= max) {
    let mid = Math.floor((min + max) / 2);
    let cnt = 1;
    let prev = input[0];
    for (let i = 1; i < input.length; i++) {
      if (input[i] >= prev + mid) {
        cnt++;
        prev = input[i];
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
