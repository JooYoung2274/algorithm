function solution(no, works) {
  let result = 0;
  if (
    works.reduce((a, b) => {
      a + b;
    }) <= no
  ) {
    return 0;
  }

  for (let i = 0; i < no; i++) {
    console.log(works);
    if (works.length <= 1) {
      return;
    }
    for (let j = Math.floor(works.length / 2); j >= 0; j--) {
      let left = 2 * j + 1;
      let right = 2 * j + 2;
      let parent = j;

      if (left < works.length) {
        if (works[left] > works[parent]) {
          parent = left;
        }
        if (works[right] > works[parent]) {
          parent = right;
        }
        if (j !== works.length) {
          let tmp = works[parent];
          works[parent] = works[j];
          works[j] = tmp;
        }
      }
    }

    let tmp2 = works.shift() - 1;
    works.push(tmp2);
  }
  for (let i = 0; i < works.length; i++) {
    result += Math.pow(works[i], 2);
  }
  console.log(result);
}

let no = 2;
let works = [3, 3, 3];

console.log(solution(no, works));
