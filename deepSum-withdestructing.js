//Write a function deepSum(arr) that takes an array which may contain nested
//arrays and returns the sum of all numbers at any depth.

const deepSum = (arr) => {
  if (arr.length === 0) return 0;

  const [first, ...rest] = arr;

  const firstValue = Array.isArray(first) ? deepSum(first) : first;

  return firstValue + deepSum(rest);
};

let result = deepSum([1, [2, 2], 3]);
console.log(result);
