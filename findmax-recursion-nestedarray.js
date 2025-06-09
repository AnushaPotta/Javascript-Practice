//Write a recursive function called findMax that takes a nested array (i.e.,
// //an array that may contain numbers or arrays of numbers) and returns the maximum number found in it.
const findMax = (arr) => {
  if (arr.length === 0) return 0;

  let max;
  if (Array.isArray(arr[0])) max = findMax(arr[0]);
  else max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    let x;

    if (Array.isArray(arr[i])) x = findMax(arr[i]);
    else x = arr[i];

    if (x > max) max = x;
  }

  return max;
};

let result = findMax([1, [2, 2, 60], 3, [4, 500, 6]]);
console.log(result);
