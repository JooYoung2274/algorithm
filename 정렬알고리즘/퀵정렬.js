// 퀵정렬

let arr = [5, 10, 66, 77, 84, 32, 11, 15];

function quickarr(arr) {
  let arrleng = arr.length;

  if (arrleng <= 1) {
    return arr;
  }
  let pvalue = [arr.shift()];
  let f1 = [];
  let f2 = [];

  for (let i in arr) {
    if (arr[i] < pvalue) {
      f1.push(arr[i]);
    } else {
      f2.push(arr[i]);
    }
  }
  return quickarr(f1).concat(pvalue, quickarr(f2));
}
console.log(quickarr(arr));
