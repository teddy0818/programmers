function solution(price, money, count) {
  let answer = 0;
  for (let i = 1; i <= count; i++) {
    answer += i * price;
  }
  answer -= money;

  if (answer <= 0) {
    return 0;
  }

  return answer;
}
