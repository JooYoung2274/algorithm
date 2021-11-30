// // 문제1 : 암호해독

// // // console.log(`'   + -- + - + -   '`);
// // // console.log(`'   + --- + - +   '`);
// // // console.log(`'   + -- + - + -   '`);
// // // console.log(`'   + - + - + - +   '`);

// // let data = [
// //   "   + -- + - + -   ",
// //   "   + --- + - +   ",
// //   "   + -- + - + -   ",
// //   "   + - + - + - +   ",
// // ];
// // let result = "";
// // for (let s of data) {
// //   console.log(s.replace(/ /g, "").replace(/\+/g, "1").replace(/-/g, "0"));
// //   console.log(
// //     parseInt(s.replace(/ /g, "").replace(/\+/g, "1").replace(/-/g, "0"), 2)
// //   );
// //   console.log(
// //     String.fromCharCode(
// //       parseInt(s.replace(/ /g, "").replace(/\+/g, "1").replace(/-/g, "0"), 2)
// //     )
// //   );
// //   result += String.fromCharCode(
// //     parseInt(s.replace(/ /g, "").replace(/\+/g, "1").replace(/-/g, "0"), 2)
// //   );
// // }

// // console.log(result);

// // //////////////////////////////////////

// // 문제2 : JAVA독과 함께!

// // let 내구도 = [1, 2, 1, 4];
// // let 독 = [
// //   {
// //     이름: "루비독",
// //     나이: "95년생",
// //     점프력: "3",
// //     몸무게: "4",
// //   },
// //   {
// //     이름: "피치독",
// //     나이: "95년생",
// //     점프력: "3",
// //     몸무게: "3",
// //   },
// //   {
// //     이름: "씨-독",
// //     나이: "72년생",
// //     점프력: "2",
// //     몸무게: "1",
// //   },
// //   {
// //     이름: "코볼독",
// //     나이: "59년생",
// //     점프력: "1",
// //     몸무게: "1",
// //   },
// // ];

// // //
// // let answer = [];
// // function joo(내구도, 독) {
// //   for (let 개별독 of 독) {
// //     let 독의위치 = 0;
// //     let 판단 = false;
// //     while (독의위치 < 내구도.length - 1) {
// //       독의위치 += parseInt(개별독["점프력"], 10);
// //       내구도[독의위치 - 1] -= parseInt(개별독["몸무게"], 10);
// //       if (내구도[독의위치 - 1] < 0) {
// //         판단 = true;
// //         break;
// //       }
// //     }
// //     if (!판단) {
// //       answer.push(개별독["이름"]);
// //     }
// //   }
// //   return answer;
// // }

// // console.log(joo(내구도, 독));

// // ////////////////////////////////////////

// 문제3 : 섬으로 건너가라!

// let 대기인원 = 14000605;

// 9시 00분 25 25
// 9시 10분 15 40
// 9시 20분 15 55
// 9시 30분 15 70
// 9시 40분 15 85
// 9시 50분 15 100

// 100명씩 12시간 : 하루에 1200명

// console.log(`걸린일수 : ${대기인원 / 1200}`);

// let 일년일수 = 0;
// for (let i = 1; i < 11; i++) {
//   일년일수 += 2 ** i;
// }
// console.log(`걸린연도 : ${대기인원 / 1200 / 일년일수}`);
// console.log(`걸린연도 제외한 나머지 일수 : ${(대기인원 / 1200) % 일년일수}`);

// let 걸린월수 = 0;
// let 나머지일수 = (대기인원 / 1200) % 일년일수;
// console.log(`계산전 나머지일수 : ${나머지일수}`);
// for (let i = 10; i > 0; i--) {
//   걸린월수++;
//   if (나머지일수 < 2 ** i) {
//     break;
//   }
//   나머지일수 = 나머지일수 - 2 ** i;
// }
// console.log(`계산후 나머지일수 : ${나머지일수}`);
// console.log(`걸린월수 : ${걸린월수}`);
// console.log(`시간 : ${(대기인원 % 1200) / 100 + 9}`);

// let 최종계산된분 = 0;
// let 출발분 = [25, 40, 55, 70, 85, 100];
// for (let i in 출발분) {
//   if (출발분[i] > (대기인원 % 1200) % 100) {
//     최종계산된분 = i * 10;
//     break;
//   }
// }
// console.log(`최종계산된분 : ${최종계산된분 + date.getMinutes()}`);

// let date = new Date();
// console.log(date.getFullYear());
// console.log(date.getDay());
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());

// if (최종계산된분 + date.getMinutes() > 60) {
//   최종계산된분 = 최종계산된분 + date.getMinutes() - 60;
//   //시간에 + 1 해야함
// }

let 대기인원 = 14000605;
function 배를건너는시간(대기인원) {
  let 연 = 0,
    월 = 0,
    일 = 0,
    시 = 0,
    분 = 0;
  let 걸린일수 = 대기인원 / 1200;
  let 일년일수 = 0;
  for (let i = 1; i < 11; i++) {
    일년일수 += 2 ** i;
  }
  년 = parseInt(대기인원 / 1200 / 일년일수, 10);

  let 걸린월수 = 0;
  let 나머지일수 = (대기인원 / 1200) % 일년일수;
  console.log(`계산전 나머지일수 : ${나머지일수}`);
  for (let i = 10; i > 0; i--) {
    걸린월수++;
    if (나머지일수 < 2 ** i) {
      break;
    }
    나머지일수 = 나머지일수 - 2 ** i;
  }
  일 = parseInt(나머지일수, 10);
  월 = parseInt(걸린월수, 10);

  let date = new Date();
  시 = parseInt((대기인원 % 1200) / 100 + 9, 10);

  let 최종계산된분 = 0;
  let 출발분 = [25, 40, 55, 70, 85, 100];
  for (let i in 출발분) {
    if (출발분[i] > (대기인원 % 1200) % 100) {
      최종계산된분 = i * 10;
      break;
    }
  }

  if (최종계산된분 + date.getMinutes() > 60) {
    최종계산된분 = 최종계산된분 + date.getMinutes() - 60;
    시 += 1;
  }
  분 = parseInt(최종계산된분 + date.getMinutes(), 10);

  return `${년}년 ${월}월 ${일}일 ${시}시 ${분}분`;
}
console.log(배를건너는시간(대기인원));
