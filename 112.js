function solution(no, works) {
  if (works.reduce((a, b) => a + b) <= no) {
    return 0;
  }
  let result = 0;
  for (let i = 0; i < no; i++) {
    const maxNum = Math.max(...works);
    const maxIndex = works.indexOf(maxNum);
    works.splice(maxIndex, 1);
    works.push(maxNum - 1);
  }
  for (let i = 0; i < works.length; i++) {
    result += Math.pow(works[i], 2);
  }
  console.log(result);
}

let no = 4;
let works = [4, 3, 3];
console.log(solution(no, works));
