function solution(n, arr1, arr2) {
  let answer = [];

  let length = arr1.length;

  for (let i = 0; i < length; i++) {
    let arr1_bin = numToBinary(arr1[i], length);
    let arr2_bin = numToBinary(arr2[i], length);
    let row = '';

    for (let j = 0; j < length; j++) {
      if (arr1_bin[j] == 1 || arr2_bin[j] == 1) {
        row += '#';
      } else {
        row += ' ';
      }
    }
    answer.push(row);
  }

  return answer;
}

function numToBinary(num, length) {
  let result = '';
  while (num > 0) {
    let na = parseInt(num % 2);
    let mok = parseInt(num / 2);
    num = mok;
    result = na + result;
  }
  let diff = length - result.length;
  for (let i = 0; i < diff; i++) {
    result = '0' + result;
  }
  return result;
}
