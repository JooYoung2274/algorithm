function solution(board, moves) {
  var answer = 0;
  let result = [];

  for (let i = 0; i < moves.length; i++) {
    const x = moves[i];
    for (let n = 0; n < board.length; n++) {
      let num = board[n][x - 1];
      if (num !== 0) {
        result.push(num);
        board[n][x - 1] = 0;
        if (result[result.length - 1] === result[result.length - 2]) {
          answer += 2;
          result.pop();
          result.pop();
        }
        break;
      }
    }
  }
  return answer;
}
//4, 3, 1, 1, 3, 2,4
// x = 1 -> board[3][0] = 4  board[3].shift()
let board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];
const moves = [1, 5, 3, 5, 1, 2, 1, 4];
console.log(solution(board, moves));
