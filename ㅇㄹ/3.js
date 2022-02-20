function solution(board, c) {
  var answer = 0;
  let arr = [];
  let len = board[0].length;

  const distance = Array(len).fill(0);

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < len; j++) {
      if (board[j][i] === 1) {
        distance[i]++;
      }
    }
  }

  return answer;
}
let board = [
  [0, 0, 0, 0, 2, 0, 0, 0, 0, 0],
  [0, 0, 1, 1, 1, 1, 1, 0, 0, 0],
  [0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
  [0, 0, 1, 1, 1, 1, 1, 0, 1, 0],
  [0, 0, 1, 1, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 3, 0, 0, 0, 1, 0],
];
console.log(solution(board));
