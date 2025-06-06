//Write a function deepSum(arr) that takes an array which may contain nested
//arrays and returns the sum of all numbers at any depth.

const deepSum = (arr) => {
  let sum = 0;
  if (arr.length === 0) return 0;

  for (let x of arr) {
    if (Array.isArray(x)) {
      sum = sum + deepSum(x);
    } else {
      sum = sum + x;
    }
  }

  return sum;
};

let result = deepSum([1, [2, 2], 3]);
console.log(result);
