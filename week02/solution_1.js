"use strict";

function doubleOddNumbers(numbers) {
  const newNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
      newNumbers.push(numbers[i] * 2);
    }
  }
  return newNumbers;
}

const myNumbers = [1, 2, 3, 4];
// console.log(doubleOddNumbers(myNumbers)); // ==> [2, 6]

let solution = (data) => data.filter((x) => x % 2 !== 0).map((x) => x * 2);

console.log(solution(myNumbers));

module.exports = {
  myNumbers,
  doubleOddNumbers,
  solution,
};
