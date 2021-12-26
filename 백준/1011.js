function text(x1, y1, r1, x2, y2, r2) {
  const rSum = r1 + r2;
  const rMi = r2 - r1;
  const rSumPow = rSum ** 2;
  const rMiPow = rMi ** 2;
  const xDistance = x2 - x1;
  const yDistance = y2 - y1;
  const totalDistance = Math.sqrt(xDistance ** 2 + yDistance ** 2);

  if (totalDistance === 0) {
    if (r1 !== r2) {
      console.log(0);
    } else if (r1 === r2) {
      console.log(-1);
    }
  } else if (totalDistance !== 0) {
    if (totalDistance === rSum) {
      console.log(1);
    } else if (totalDistance > rSum) {
      console.log(0);
    } else if (totalDistance < rSum && totalDistance > rMi) {
      console.log(2);
    } else if (totalDistance === r2 - r1 || totalDistance === r1 - r2) {
      console.log(1);
    } else if (totalDistance < r2 - r1 || totalDistance < r1 - r2) {
      console.log(0);
    }
  }
}
console.log(text(0, 2, 1, 3, 0, 45));
