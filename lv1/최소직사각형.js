function solution(sizes) {
  var answer = 0;
  let max = 0;
  for (let i = 0; i < sizes.length; i++) {
    for (let j = 0; j < sizes[i].length; j++) {
      if (max < sizes[i][j]) {
        max = sizes[i][j];
      }
    }
  }
  console.log(max);
  return answer;
}
