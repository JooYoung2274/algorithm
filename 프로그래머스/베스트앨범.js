function solution(genres, plays) {
  var answer = [];

  const genreMap = new Map();

  let newGenres = genres.map((genre, index) => [genre, plays[index]]);

  for (let i = 0; i < newGenres.length; i++) {
    let genre = genres[i];
    let play = plays[i];
    const data = genreMap.get(genre) || { total: 0, songs: [] };

    genreMap.set(genre, {
      total: data.total + play,
      songs: [...data.songs, { play, i }],
    });
  }

  let arr2 = [...genreMap].sort((a, b) => b[1].total - a[1].total);

  for (let k = 0; k < arr2.length; k++) {
    arr2[k][1].songs.sort((a, b) => b.play - a.play);
  }

  let result = [];
  for (let k = 0; k < arr2.length; k++) {
    for (let j = 0; j < arr2[k][1].songs.length; j++) {
      if (result.length >= (k + 1) * 2) {
        break;
      }
      result.push(arr2[k][1].songs[j].i);
    }
  }

  answer = result;
  return answer;
}
