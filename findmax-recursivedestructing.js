//Write a recursive function called findMax that takes a nested array (i.e.,
//an array that may contain numbers or arrays of numbers) and returns the
//maximum number found in it.
const findMax = (arr) => {
  if (arr.length === 0) return -Infinity;

  const [first, ...rest] = arr;
  let max;
  let x;
  if (Array.isArray(first)) max = findMax(first);
  else max = first;

  x = findMax(rest);

  if (x > max) max = x;

  return max;
};

let result = findMax([1, [2, 2, 60], 3000, [-4, 500, 6]]);
console.log(result);
