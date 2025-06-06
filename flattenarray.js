//Write a function flattenArray(arr) that takes a deeply nested array
//(e.g. [1, [2, [3, 4], 5], 6]) and returns a single flat array (e.g. [1, 2, 3, 4, 5, 6]).

const flattenArray = (arr) => {
  let flatArr = [];

  if (arr.length === 0) return [];

  for (let x of arr) {
    if (Array.isArray(x)) {
      flatArr = flatArr.concat(flattenArray(x));
    } else flatArr.push(x);
  }

  return flatArr;
};

let result = flattenArray([1, [2, 2], 3, [4, 5, 6]]);
console.log(result);
