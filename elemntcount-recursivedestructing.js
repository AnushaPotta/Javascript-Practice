//Write a function countElements that takes an array (which may include nested arrays) and
// returns the total count of all elements, including those in any level of nesting.
const countElements = (arr) => {
  let count = 0;

  if (arr.length === 0) return count;

  const [first, ...rest] = arr;

  if (Array.isArray(first))
    count = count + countElements(first) + countElements(rest);
  else count = count + 1 + countElements(rest);

  return count;
};

let result = countElements([1, [2, 2, 60], 3000, [-4, 500, 6, 28]]);
console.log(result);
