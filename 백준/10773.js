var fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const gg = input.shift();

//Number 빼먹어서 계속 출력초과 나옴..

const stack = [];
let result = 0;
for (let i = 0; i < gg; i++) {
  const m = Number(input[i]);
  if (m !== 0) {
    stack.push(m);
  } else {
    stack.pop();
  }
}

for (let i = 0; i < stack.length; i++) {
  result += stack[i];
}

console.log(result);
