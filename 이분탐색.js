function solution(arr, target) {
  let minNum = arr[0];
  let maxNum = arr[arr.length - 1];
  let centerNum = parseInt((minNum + maxNum) / 2, 10);
  while (minNum <= maxNum) {
    if (arr[centerNum] === target) {
      return console.log(centerNum);
    } else if (arr[centerNum] < target) {
      minNum = centerNum + 1;
    } else if (arr[centerNum] > target) {
      maxNum = centerNum - 1;
    }
    centerNum = parseInt((minNum + maxNum) / 2, 10);
  }
}

const target = 7;
const arr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(solution(arr, target));
