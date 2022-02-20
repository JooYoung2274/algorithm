function generateRandomArray(n) {
  let arr = [];
  while (arr.length < 2 * n + 1) {
    let num = Math.floor(Math.random() * 200 - 100);
    if (-100 < num < 100 && !arr.includes(num)) {
      if (!arr.length) {
        arr.push(num);
      } else {
        arr.push(num);
        arr.push(num);
      }
    }
  }
  console.log(arr);

  for (let i = 0; i < arr.length; i++) {
    let num = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[num]] = [arr[num], arr[i]];
  }
  console.log(arr);

  let map = new Map();

  for (let i = 0; i < arr.length; i++) {
    let v = arr[i];

    if (!map.has(v)) {
      map.set(v, 0);
    } else {
      let t = map.get(v) + 1;
      map.set(v, t);
    }
  }

  console.log(map.keys());

  for (let key of map.keys()) {
    if (map.get(key) === 0) {
      console.log(key);
    }
  }
}

console.log(generateRandomArray(2));
