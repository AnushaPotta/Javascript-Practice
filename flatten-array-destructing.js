//Write a function flattenArray(arr) that takes a deeply nested array
//(e.g. [1, [2, [3, 4], 5], 6]) and returns a single flat array (e.g. [1, 2, // 3, 4, 5, 6]).

const flattenArray = (arr) => {
  let flatArr = [];

  if (arr.length === 0) return flatArr;

  const [first, ...rest] = arr;
  const firstValue = Array.isArray(first) ? flattenArray(first) : first;

  if (firstValue === first) {
    flatArr.push(first);
    flatArr = flatArr.concat(flattenArray(rest));
  } else
    flatArr = flatArr.concat(flattenArray(first)).concat(flattenArray(rest));

  return flatArr;
};

let result = flattenArray([1, [2, 2], 3, [4, 5, 6]]);
console.log(result);
