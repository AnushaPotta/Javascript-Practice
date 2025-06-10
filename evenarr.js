//Write a function that takes an array of numbers and returns only the even ones.

const filterEvens = (arr) => {
  let evenArr = arr.filter((value) => value % 2 === 0);

  return evenArr;
};

let result = filterEvens([1, 2, 2, 60, 3000, -4, 500, 6, 28]);
console.log(result);
