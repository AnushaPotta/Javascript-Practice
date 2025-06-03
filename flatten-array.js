//Write a function flattenArray(arr) that takes an array which may contain
//nested arrays (one level deep), and returns a flattened version of the
//array.
const flattenArray = (arr) => {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > 1) {
      for (let j = 0; j < arr[i].length; j++) {
        newArr = newArr.concat(arr[i][j]);
      }
    } else newArr = newArr.concat(arr[i]);
  }

  return newArr;
};

let result = flattenArray([1, [1, 2], 3, [4, 5]]);
console.log(result);
