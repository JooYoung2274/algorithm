피보나치 순열
1 1 2 3 5 8 13 ....

let a = 1;
let b = 1;
for (let i = 0; i < 5; i++) {
  let c = a + b;
  a = b;
  b = c;
}
console.log(c);

function dex(n) {
  if (n === 1 || n === 2) {
    return 1;
  }
  return dex(n - 1) + dex(n - 2);
}
console.log(dex(5));

