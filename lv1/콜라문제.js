function solution(a, b, n) {
  let answer = 0;
  let t = n;

  while (parseInt(t / a) > 0) {
    let na = parseInt(t % a);
    let mok = b * parseInt(t / a);
    t = na + mok;
    answer += mok;
  }

  return answer;
}
