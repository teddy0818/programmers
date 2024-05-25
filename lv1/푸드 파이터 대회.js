function solution(food) {
  var answer = '';
  let str1 = '';
  let str2 = '';

  for (let i = 1; i < food.length; i++) {
    let num = parseInt(food[i] / 2);

    if (num == 1 && num > 3 && num % 2 != 0) {
      num = num - 1;
    }

    for (let j = 0; j < num; j++) {
      str1 += i;
    }
  }

  for (let i = 1; i < food.length; i++) {
    let num = parseInt(food[i] / 2);

    if (num == 1 && num > 3 && num % 2 != 0) {
      num = num - 1;
    }

    for (let j = 0; j < num; j++) {
      str2 = i + str2;
    }
  }

  answer = str1 + 0 + str2;

  return answer;
}
