const max_heap = (arr) => {
  if (arr.length <= 1) {
    return;
  }

  for (let i = Math.floor(arr.length / 2); i >= 0; i--) {
    let left = 2 * i + 1;
    let right = 2 * i + 2;
    let parent = i;

    if (left < arr.length) {
      if (arr[left] > arr[parent]) {
        parent = left;
      }
      if (arr[right] > arr[parent]) {
        parent = right;
      }
      if (i !== parent) {
        let tmp = arr[parent];
        arr[parent] = arr[i];
        arr[i] = tmp;
      }
    }
  }
};
