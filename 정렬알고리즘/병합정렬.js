// 병합정렬
// 어떤 정렬보다 빠름 (O(nlogn))

let arr = [5, 10, 66, 77, 54, 32, 11, 15];
// console.log(arr.slice(0, 4));
// console.log(arr.slice(4));

function fx2(arr) {
  let arrleng = arr.length;
  let result = [];
  if (arrleng <= 1) {
    return arr;
  }
  let line = parseInt(arrleng / 2);
  let f1 = fx2(arr.slice(0, line));
  let f2 = fx2(arr.slice(line));

  while (f1.length != 0 && f2.length != 0) {
    if (f1[0] < f2[0]) {
      result.push(f1.shift());
    } else {
      result.push(f2.shift());
    }
  }
  while (f1.length != 0) {
    result.push(f1.shift());
  }
  while (f2.length != 0) {
    result.push(f2.shift());
  }
  return result;
}
console.log(fx2(arr));
