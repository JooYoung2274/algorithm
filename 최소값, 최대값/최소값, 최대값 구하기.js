// 최소값, 최대값;

let a = [10, 20, 30, 1, 2, 3, 5, 9, 11];

a.sort(); //a가 정렬됨
console.log(a[a.length - 1]);
// 9가 출력됨. 왜? 사전식 정렬이라서
// a.sort() 의 값은 [1, 10, 11, 2, 20, 3, 30, 5 , 9].

console.log(Math.max(10, 20)); // 20
console.log(Math.min(10, 20)); // 10
// Math.max, Math.min에는 array 값을 넣을 수 없음.

console.log(Math.max.apply(null, a)); // 30
console.log(Math.min.apply(null, a)); // 1
// .apply를 이용해 array이용 가능.

console.log(Math.max(...a)); // 30 //array를 못넣으니 spread 이용해서 넣을 수 있음.
console.log(Math.min(...a)); // 1

// // 최대값
// let m = a[0]; // a의 원소 아무거나 들어가있어도 상관없을듯.
// for (const iterator of a) {
//   // for of 반복문 사용
//   if (iterator > m) {
//     m = iterator;
//   }
// }
// console.log(m);

// // 최소값
// let m = a[0]; // a의 원소 아무거나 들어가있어도 상관없을듯.
// for (const iterator of a) {
//   // for of 반복문 사용
//   if (iterator < m) {
//     m = iterator;
//   }
// }
// console.log(m);

// array.reduce(callback[, initialValue])
// 여기서 initialValue는 최초 호출에서 첫 번째 인수에 제공하는 값.
// 입력안하면 배열의 첫 번째 요소를 사용함.

// let a = [6, 5, 4, 3, 2];

// // 덧셈
// const reducerOne = (accumulator, currentvalue) => accumulator + currentvalue;

// // 뺄셈
// const reducerTwo = (accumulator, currentvalue) => accumulator - currentvalue;

// // 최대값
// const reducerThree = (accumulator, currentvalue) =>
//   accumulator > currentvalue ? accumulator : currentvalue;

// // 최소값
// const reducerFour = (accumulator, currentvalue) =>
//   accumulator < currentvalue ? accumulator : currentvalue;

// console.log(a.reduce(reducerOne));
// console.log(a.reduce(reducerTwo));
// console.log(a.reduce(reducerThree));
// console.log(a.reduce(reducerFour));
