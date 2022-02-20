function solution(s) {
  let count = 0;
  let i = 0;
  let len = s.length - 1;

  while (i < len) {
    if (i % 2 === 0) {
      if (s[i - count] >= s[i + 1 - count]) {
        count += 1;
        len += 1;
        i += 2;
      } else {
        i += 1;
      }
    } else {
      if (s[i - count] <= s[i + 1 - count]) {
        count += 1;
        len += 1;
        i += 2;
      } else {
        i += 1;
      }
    }
  }

  return count;
}
