function solution(t, p) {
  var answer = 0;
  for (let i = 0; i < t.length - p.length + 1; i++) {
    let part = parseInt(t.substring(i, i + p.length));
    console.log(part);
    if (part <= p) {
      answer++;
    }
  }
  return answer;
}
