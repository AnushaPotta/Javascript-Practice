//Write a function removeFalsy that takes an array and
//returns a new array with all falsy values removed.
const removeFalsy = (arr) => {
  let newArr = [];
  newArr = arr.filter((value) => Boolean(value));
  return newArr;
};

let result = removeFalsy([false, 0, 1, NaN, "a"]);
console.log(result);
