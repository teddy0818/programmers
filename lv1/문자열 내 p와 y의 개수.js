function solution(s) {
  let answer = false;
  let pCnt = 0;
  let yCnt = 0;
  for (let i = 0; i < s.length; i++) {
    let alpha = s[i].toLowerCase();
    if (alpha === 'p') {
      pCnt++;
    } else if (alpha === 'y') {
      yCnt++;
    }
  }

  if (pCnt == yCnt) {
    answer = true;
  }

  return answer;
}
