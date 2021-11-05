// 재귀함수 사례 - 각 자릿수의 합

let n = "123";
let result = 0;

while (true) {
  if (x.length === 1) {
    result += parseInt(x, 10);
    break;
  }
  let y = x.split("");
  result += parseInt(y.pop(), 10);
  x = y.join("");
}

console.log(result);

function sum(n) {
  if (n.length === 1) {
    return parseInt(n, 10);
  }
  return parseInt(n[n.length - 1], 10) + sum(n.slice(0, n.length - 1));
}
console.log(sum("123"));
