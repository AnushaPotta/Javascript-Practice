//Write a function sumArray(arr) that takes an array of numbers and returns the sum of all elements using recursion.

const sumArray = (arr) => {
  let l = arr.length;

  if (l === 0) {
    return 0;
  }

  return arr[0] + sumArray(arr.slice(1));
};

let sum = sumArray([1, 2, 3, 4, 5, 6]);
console.log(sum);
