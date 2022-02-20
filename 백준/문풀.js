// var fs = require("fs");
// var input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// const gg = input.shift();
// input.map((i) => parseInt(i));

function solution(input, gg) {
  const reducer = (accumulator, currentvalue) => accumulator + currentvalue;
  const answer1 = input.reduce(reducer) / Number(gg);
  console.log(Math.round(answer1));

  input.sort((a, b) => a - b);
  const answer2 = input[Math.floor(input.length / 2)];
  console.log(answer2);

  const map = new Map();

  let max = 1;
  for (let i = 0; i < input.length; i++) {
    if (map.has(input[i])) {
      max = Math.max(max, map.get(input[i]) + 1);
      map.set(input[i], map.get(input[i]) + 1);
    } else map.set(input[i], 1);
  }

  const arr = [];
  for (let [key, val] of map) {
    if (val === max) arr.push(key);
  }

  if (arr.length !== 1) {
    console.log(arr[1]);
  } else {
    console.log(arr[0]);
  }

  const answer4 = arr[arr.length - 1] - arr[0];
  console.log(answer4);
}

const input = [-1, -2, -3, -1, -2];
const gg = 5;
console.log(solution(input, gg));
