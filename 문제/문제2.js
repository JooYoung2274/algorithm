function 문제2(arr, dogs) {
  let answer = [];
  for (let dog of dogs) {
    let whereDog = 0;
    while (whereDog < arr.length) {
      whereDog += parseInt(dog["점프력"] - 1, 10);
      let kongArr = arr[whereDog] - parseInt(dog["몸무게"], 10);
      if (kongArr < 0) {
        arr[whereDog] = kongArr;
        break;
      } else {
        answer.push(dog["이름"]);
      }
    }
  }

  return answer;
}
