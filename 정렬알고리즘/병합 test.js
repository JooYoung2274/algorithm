function 병합(arr) {
  let len = arr.length;
  let result = [];
  if (len <= 1) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  let left = 병합(arr.slice(0, mid));
  let right = 병합(arr.slice(mid));

  while (left.length !== 0 && right.length !== 0) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  while (left.length !== 0) {
    result.push(left.shift());
  }

  while (right.length !== 0) {
    result.push(right.shift());
  }

  return result;
}
