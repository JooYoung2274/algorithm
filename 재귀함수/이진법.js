// 재귀함수 사례 - 2진수 변환

// Math.ceil() : 소수점 올림
// Math.floor() : 소수점 버림
// Math.round() : 소수점 반올림

// 11을 2진수로 변환

// 이진법 만드는 방법
function 이진법(n) {
  if (n === 1 || n === 0) {
    return String(n);
  }
  return 이진법(Math.floor(n / 2)) + String(n % 2);
}
console.log(이진법(11));

// 노가다 방법
let result = "";
let x = 11;
while (true) {
  if (x % 2 === 0) {
    result += "0";
  } else {
    result += "1";
  }
  x = Math.floor(x / 2);
  if (x === 1 || x === 0) {
    result += String(x);
    break;
  }
}
console.log(result.split("").reverse().join(""));
// result는 1101이 나옴. 원하는 값은 1011. 이걸 뒤집기 위해서
// .split("")을 통해 어레이로 만들고 ["1", "1", "0", "1"]
// .reverse()를 통해 어레이 순서를 뒤집고 ["1", "0", "1", "1"]
.join("")을 통해 다시 스트링으로 만듦. 1011 (string)
