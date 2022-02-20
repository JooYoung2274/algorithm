function solution(n) {
  let count = 0;

  let n_str = n.toString();
  let n_arr = n_str.split("");
  const set = new Set(n_arr);
  n_arr = [...set];

  let n_num = n_arr.map((v) => +v);

  for (let i = 0; i < n_num.length; i++) {
    if (n % n_num[i] === 0) {
      count++;
    }
  }

  return count;
}
