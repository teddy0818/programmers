function solution(s) {
  let answer = s;
  let numbers = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];

  for (let i = 0; i < numbers.length; i++) {
    let arr = answer.split(numbers[i]);
    console.log(arr);
    answer = arr.join(i);
    console.log(answer);
  }

  return parseInt(answer);
}
