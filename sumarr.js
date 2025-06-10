//Write a function that takes an array of numbers and returns the sum of all numbers.

const sumNumbers = (arr) => {
  let sum = arr.reduce((acc, value) => acc + value);

  return sum;
};

let result = sumNumbers([1, 2, 2, 60, 3000, -4, 500, 6, 28]);
console.log(result);
