function solution(left, right) {
  let sum = 0;
  for (left; left <= right; left++) {
    let cnt = 0;
    for (let j = 1; j < left; j++) {
      if (left % j == 0) {
        cnt++;
      }
    }
    if (cnt % 2 == 0) {
      sum -= left;
    } else {
      sum += left;
    }
  }
  return sum;
}
