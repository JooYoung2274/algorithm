// Set

let s = new Set("abcdeeeeeee");
console.log(s);
// {'a', 'b', 'c', 'd', 'e'}
// 중복 제거
// 만약 중복제거 후 숫자 알고싶으면
console.log(s.size);
// 5

s.add("f"); //추가하는것
console.log(s);

for (let variable of s) {
  console.log(variable);
}
// 전체 한번씩 출력 (한줄씩)

let ss = new Set("abcdeeeeeee".split(""));
console.log(ss);
// {'a', 'b', 'c', 'd', 'e'}
// 문자나 어레이나 똑같음
// Map이랑 Set이랑 비슷함
// delete(), has()
