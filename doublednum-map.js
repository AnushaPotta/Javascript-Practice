//Write a function that takes an array of numbers and returns a new array with each number doubled.

function doubleNumbers(arr) {
  const doubled = arr.map((value) => 2 * value);
  return doubled;
}

let result = doubleNumbers([1, 2, 2, 60, 3000, -4, 500, 6, 28]);
console.log(result);
