// 삽입정렬

let arr = [5, 10, 66, 77, 54, 32, 11, 15];
let result = [];
let arrleng = arr.length;

function fx2(result, f) {
  //f가 들어갈 위치 찾는 함수
  for (let i in result) {
    if (f < result[i]) {
      return i;
    }
  }
  return result.length;
}

for (let i = 0; i < arrleng; i++) {
  // 반복문
  let f = arr.shift(); // arr 배열에서 맨앞에꺼 삭제하고 빼옴
  let f2 = fx2(result, f); // 변수에 저장
  result.splice(f2, 0, f); // splie(들어갈위치, 0, 들어갈값)
  console.log(result);
}
