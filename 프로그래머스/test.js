function solution(m, musicinfos) {
  var regexForC = /C#/gi;
  var regexForD = /D#/gi;
  var regexForG = /G#/gi;
  var regexForF = /F#/gi;
  var regexForA = /A#/gi;
  let newM = m;
  if (m.split("#").length !== 1) {
    newM = m.replace(regexForC, "c");
    newM = newM.replace(regexForD, "d");
    newM = newM.replace(regexForF, "f");
    newM = newM.replace(regexForG, "g");
    newM = newM.replace(regexForA, "a");
  }

  let 재생시간배열 = [];
  let 음원이름배열 = [];
  for (let i = 0; i < musicinfos.length; i++) {
    let 샾있는음원 = musicinfos[i].split(",");
    let 음원 = 샾있는음원[3];
    if (샾있는음원[3].split("#").length !== 1) {
      음원 = 샾있는음원[3].replace(regexForC, "c");
      음원 = 음원.replace(regexForD, "d");
      음원 = 음원.replace(regexForF, "f");
      음원 = 음원.replace(regexForG, "g");
      음원 = 음원.replace(regexForA, "a");
    }
    let 재생시간1 = 샾있는음원[1].split(":")[0] - 샾있는음원[0].split(":")[0];
    let 재생시간 = 샾있는음원[1].split(":")[1] - 샾있는음원[0].split(":")[1];
    let 총재생시간 = 재생시간1 * 60 + 재생시간;
    let 음원길이 = 음원.length;
    let 반복할길이 = Math.floor(총재생시간 / 음원길이);
    let 반복할나머지 = 총재생시간 % 음원길이;
    let 재생된음원 = 음원.repeat(반복할길이) + 음원.slice(0, 반복할나머지);
    let 맞는지아닌지 = false;

    let 확인할음원 = 재생된음원.split(newM);
    if (확인할음원.length !== 1) {
      맞는지아닌지 = true;
    }
    if (맞는지아닌지 === true) {
      재생시간배열.push(총재생시간);
      음원이름배열.push(샾있는음원[2]);
    }
  }
  if (!재생시간배열.length) {
    return "(None)";
  }
  let 음원위치 = 재생시간배열.indexOf(Math.max(...재생시간배열));
  return 음원이름배열[음원위치];
}

m = "C#D#EFD#GAC";
musicinfos = ["12:00,12:06,HELLO,CDEFGA"];
console.log(solution(m, musicinfos));
