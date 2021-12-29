function test(m) {
  let array = [];
  let result = "YES";
  for (let i = 0; i < m.length; i++) {
    if (m[i] === "(") {
      array.push("(");
    } else {
      const arr = array.pop();
      if (!arr) {
        result = "NO";
        break;
      }
    }
  }
  if (array.length !== 0) {
    result = "NO";
  }
  console.log(result);
}
const m = "())(()";
console.log(test(m));
