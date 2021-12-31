function test(m) {
  let array = [];
  let result = "yes";

  for (let i = 0; i < m.length; i++) {
    if (m[i] === "(") {
      array.push("(");
    } else if (m[i] === ")") {
      const arr = array.pop();
      if (!arr || arr === "[") {
        result = "no";
      }
    }
    if (m[i] === "[") {
      array.push("[");
    } else if (m[i] === "]") {
      const arr = array.pop();
      if (!arr || arr === "(") {
        result = "no";
      }
    }
  }
  if (array.length) {
    result = "no";
  }

  console.log(result);
}
const m = " .";
console.log(test(m));
