// 1. 선택정렬
let a = [10, 11, 9, 2, 3, 6, 5, 4];
let result = [];

for (i = 0; i < 8; i++) {
  let x = Math.min(...a);
  result.push(x);
  a.splice(a.indexOf(Math.min(...a)), 1);
}
console.log(a);
console.log(result);

// while (a){

// }
