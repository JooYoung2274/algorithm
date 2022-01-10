function max_heapify(a, i, length) {
  let left = 2 * i + 1;
  let right = 2 * i + 2;
  let parent = i;

  if (left < length && a[left] > a[parent]) {
    parent = left;
  }

  if (left < length && a[right] > a[parent]) {
    parent = right;
  }

  if (i !== parent) {
  }
}
