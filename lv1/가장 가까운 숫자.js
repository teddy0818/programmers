function solution(s) {
  let answer = [];
  for (let i = 0; i < s.length; i++) {
    let num = -1;
    for (let j = 0; j < i; j++) {
      if (s[i] == s[j]) {
        num = i - j;
      }
    }
    answer.push(num);
  }

  return answer;
}
