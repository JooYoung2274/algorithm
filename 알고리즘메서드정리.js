// Infinity
// 전역 객체의 속성으로 무한대를 나타내는 숫자값
console.log(Infinity);
console.log(Infinity - 1);
console.log(100 / 0);
console.log(Math.pow(100, 1000000000));

// Nan
// 숫자가 아님을 표시
console.log(NaN); //Nan
console.log(isNaN(NaN)); //true
console.log(isNaN(100)); //false

// parseInt
// 문자열을 해당 진수의 정수로 반환
console.log(parseInt("100", 10)); //100
console.log(parseInt("100", 16)); //256

//Array 메서드

// concat()
// array를 합침
let arr = ["사과", "배", "바나나"];
let arrTwo = ["파인애플", "복숭아"];
console.log(arr.concat(arrTwo));
//["사과", "배", "바나나", "파인애플", "복숭아"]

// push() 배열 끝에 항목 추가
// pop() 배열 끝에서 항목 제거
// unshift() 배열 앞에 항목 추가
// shift() 배열 앞에서 항목 제거
let arr = ["사과", "배", "한라봉", "바나나"];
console.log(arr.push("파인애플")); //5
console.log(arr); //["사과", "배", "한라봉", "바나나", "파인애플"]

console.log(arr.pop()); // "파인애플"
console.log(arr); //["사과", "배", "한라봉", "바나나"]

console.log(arr.unshift("감귤")); //5
console.log(arr); //["감귤", "사과", "배", "한라봉", "바나나"]

console.log(arr.shift()); //"감귤"
console.log(arr); //["사과", "배", "한라봉", "바나나"]

// splice()
// 요소를 삭제하거나 교체함
let arr = ["사과", "배", "한라봉", "바나나"];
console.log(arr.splice(2, 1, "레드향")); //한라봉
console.log(arr); //["사과", "배", "레드향", "바나나"];

console.log(arr.splice(1, 0, "파인애플")); ////[]
console.log(arr); //["사과", "파인애플", "배", "레드향", "바나나"];

// slice()
// 요소를 인덱스 기준으로 잘라냄
let arr = [3, 4, 2, 6, 9, 1];
//2 부터 6-1까지의 요소를 새로운 배열로 반환
console.log(arr.slice(2, 6)); //[2, 6, 9, 1]
console.log(arr); //[3, 4, 2, 6, 9, 1]

// fill()
// 해당 값으로 배열을 채움
let arr3 = [1, 2, 3, 4, 5];
console.log(arr.fill(0)); //[0, 0, 0, 0, 0]
console.log(arr.fill(1, 1, 3)); // [0, 1, 1, 0, 0]
console.log(arr.fill(5, 2)); //[0, 1, 5, 5, 5]

// filter()
// 조건을 만족하는 항목들만 배열로 반환
let score = [40, 80, 75, 90, 35, 81];
let message = ["홍길동", "홍홍길동", "홍", "홍홍홍길동", "길동이"];
console.log(score.filter((x) => x > 80)); //[80, 90, 81]
console.log(message.filter((x) => x.length === 3)); //['홍길동', '길동이']

// flat()
let matrix = [1, 2, 3, [1, 2, 3, [10, 20]]];
console.log(matrix.flat()); //[1, 2, 3, [1, 2, 3, 10, 20]
console.log(matrix.flat(2)); //[1, 2, 3, 1, 2, 3, 10, 20]

// includes()
// 배열이 특정 항목을 포함하고 있는지 확인
let fruits = ["사과", "배", "한라봉", "바나나"];
fruits.includes("사과"); //true
fruits.includes("복숭아"); //false

// join()
// 배열의 항목들은 특정 값으로 이어붙임 string으로 반환
let arr = [1, 2, 3, 4, 5];
console.log(arr.join("!")); //1!2!3!4!5
console.log(arr.join("-")); //1-2-3-4-5

// map()
// 배열을 순회하며 함수를 실행한 결과로 새로운 배열을 만들어 반환
let arr = [1, 2, 3, 4, 5];
let arrTwo = ["1", "2", "3", "4", "5"];
function coding(x) {
  return x ** 2;
}
console.log(arr.map(coding)); //[1, 4, 9, 16, 25]
console.log(arr.map((x) => parseInt(x, 10))); //[1, 2, 3, 4, 5]

// Set
// 중복값을 제외한 유일한 값을 저장
let arr = [1, 1, 1, 2, 2, 3, 3, 3, 3, 4, 5, 5, 5];
let s = new Set(arr);
console.log(s); //{1, 2, 3, 4, 5}
console.log(s.size); //5
// add() 새로운 요소를 추가
// delete() 해당 요소를 삭제
// has() 특정 값을 가지고 있는지 확인 (Boolean으로 반환)
// clear() 모든 요소 제거

// Map
// key와 value를 같이 저장하는 객체
// set()
// Map 객체에 key와 value를 넣고 그 객체를 반환
let m = new Map();
m.set("하나", "one");
m.set("둘", "two");
m.set("셋", "three");
console.log(m); //{"하나" => "one", "둘" => "two", "셋" => "three"}

// get()
// 주어진 키에 해당하는 값을 반환
let m = new Map();
m.set("이름", "name");
console.log(m.get("이름")); //name

// has()
// 객체 내 주어진 키의 값이 있는지 확인하고 Boolean 값을 반환
let m = new Map();
m.set("수학점수", 90);
console.log(m.has("수학점수")); //true
console.log(m.has(90)); //false

// for-of 문을 통해 반복
let score = new Map();
m.set("국어", 90);
m.set("수학", 85);
m.set("영어", 70);

for (let [key, value] of score) {
  console.log(`${key} : ${value}`);
}
// 국어 : 90
// 수학 : 85
// 영어 : 70

for (let i of score) {
  console.log(i);
}
// [국어, 90]
// [수학, 85]
// [영어, 70]

// String
// concat()
let str = "Mac";
console.log(str.concat("book")); //'Mac book'

// includes()
let str = "abc abcd abcde ab cd def";
console.log(str.includes("abc")); //true
console.log(str.includes("fgh")); //false

// split()
// 문자열을 지정된 구분자로 나눈 후 배열로 반환
let str = "맥북프로 사줘 부탁이야 에어는 너무 느려";
console.log(str.split(" ")); //['맥북프로', '사줘', '부탁이야', '에어는', '너무', '느려']

// replace()
// 특정 패턴에 일치하는 문자열을 교체할 수 있음
let str = "abc abcd abcde ab cd def";
console.log(str.replace("abc", "!")); //'! abccd abcde ab cd def'

// indexOf()
// 주어진 문자열과 첫번째로 만나는 문자열의 인덱스를 반환
let str = "맥북프로 사줘 부탁이야";
console.log(str.indexOf("사줘 부탁이야")); //5 ( => str[5])

// slice()
// 인덱스를 기준으로 문자열을 잘라내 반환
let str = "맥북프로 사줘 부탁이야";
console.log(str.slice(5, 7)); // 사줘

// toLowerCase() / toUpperCase()
// 대소문자 변환

// for / for in / for of / for Each
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result = 0;

// for
for (let i = 0; i < arr.length; i++) {
  result += arr[i];
}
// for in
for (let i in arr) {
  result += arr[i];
}
// for of
for (let i of arr) {
  result += i;
}
// forEach (Array 에서만 사용 가능)
arr.forEach((x) => {
  result += x;
});

//Math 메서드
Math.abs(); //절대값을 반환
Math.cbrt(); //세제곱근을 반환
Math.floor(); //작거나 같은 수 중 가장 큰 정수 반환 (내림 2.5 -> 2)
Math.ceil(); //크거나 같은 수 중 가장 작은 정수를 반환 (올림 2.5 -> 3)
Math.max(); //가장 큰 수 반환
Math.min(); //가장 작은 수 반환
Math.pow(x, y); //x의 y제곱을 반환
Math.random(); //0~1사이의 랜덤한 수 반환
Math.round(); //가장 가까운정수를 반환 (반올림)
