const stack = [];
const result = [];
const gg = input.shift();

for (let i = 0; i < gg; i++) {
  switch (input[i]) {
    case "pop":
      if (stack.length === 0) {
        result.push(-1);
      } else {
        const pp = stack.pop();
        result.push(pp);
      }
      break;

    case "size":
      result.push(stack.length);
      break;

    case "empty":
      if (stack.length === 0) {
        result.push(1);
      } else {
        result.push(0);
      }
      break;

    case "top":
      if (stack.length === 0) {
        result.push(-1);
      } else {
        const zz = stack[stack.length - 1];
        result.push(zz);
      }
      break;

    default:
      stack.push(input[i].split(" ")[1]);
      break;
  }
}

console.log(result.join("\n"));
