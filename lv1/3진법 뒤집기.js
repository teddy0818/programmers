function solution(n) {
  let three = '';

  // 뒤집힌 3진수
  while (n != 0) {
    let mok = parseInt(n / 3);
    let na = n % 3;
    three = three + na;
    n = mok;
  }
  console.log(three);

  // 10진수(3진수)
  let result = 0;
  for (let i = 0; i < three.length; i++) {
    let n = parseInt(three[i]);
    let idx = three.length - 1 - i;
    result += n * 3 ** idx;
  }

  return result;
}
