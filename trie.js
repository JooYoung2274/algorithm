function solution(words) {
  let arr = [];

  for (let i = 0; i < words.length; i++) {
    arr.push(words[i][0]);
  }
  let set = new Set(arr);
  let newArr = [...set];
  if (newArr.length === words.length) {
    return console.log(words.length);
  }

  for (let i = 0; i < words.length; i++) {
    arr = [];
    for (let j = 0; j < words.length; j++) {
      if (words[j][i] !== null) {
        arr.push(words[i][i + 1]);
      }
    }

    if (arr.length !== 1) {
    }
  }
}
