function test(m) {
  let array = [1,2 3 4 5 6];
  let count = 1;
  let result = [+ + + + -];
  if (!array.includes(m)) {
    for (let i = count; i < m + 1; i++) {
      array.push(i);
      result.push("+");
    }
    array.pop();
    count++;
    result.push("-");
  }
  if (array.includes(m)) {
    if (m === array[array.length - 1] && count <= m) {
      array.pop();
      count++;
      result.push("-");
    } else if (m !== array[array.length - 1]) {
      for (let i = 0; i < array.length; i++) {
        array.pop();
        count++;
        result.push("-");
      }
    } else {
      result = "no";
    }
  }
  console.log(count);
  console.log(result);
}

const m = 6;
console.log(test(m));

var fs = require("fs");
const array = fs.readFileSync("/dev/stdin").toString().split("\n");

const stack = [];
const result = [];
const gg = array.shift();

for (let i = 0; i < gg; i++) {
  switch (array[i]) {
    case "pop":
      result.push(stack.pop() || -1);
      break;

    case "size":
      result.push(stack.length);
      break;

    case "empty":
      result.push(stack[0] ? 0 : 1);
      break;

    case "top":
      result.push(stack[stack.length - 1] || -1);
      break;

    default:
      stack.push(array[i].split(" ")[1]);
      break;
  }
}

console.log(result.join("\n"));
