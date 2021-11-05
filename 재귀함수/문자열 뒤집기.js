재귀함수 사례 - 문자열 뒤집기

let result = "";
let x = "kimjuyoung";
while (true) {
  if (x.length === 1) {
    result += x;
    break;
  }
  let y = x.split(""); //문자열을 array로 만들어서
  result += String(y.pop()); // array를 .pop()해서 맨뒤에 하나만 뺴와서 String()으로 만들고 result에 더하고
  x = y.join(""); // 남은 array를 다시 문자열하고
}
console.log(result);

재귀함수;
function reString(n) {
  if (n.length <= 1) {
    return n;
  }
  // .slice(0, 2) 문자열을 [0](포함)부터 [2](미포함)까지 남기고 잘라라.
  return n[n.length - 1] + reString(n.slice(0, n.length - 1));
}
console.log(reString("kim"));
