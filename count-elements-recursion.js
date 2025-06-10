//Write a function countElements that takes an array (which may include nested arrays) and
// returns the total count of all elements, including those in any level of nesting.
const countElements = (arr) => {
  let count = 0;

  if (arr.length === 0) return count;

  for (let x of arr) {
    const first = Array.isArray(x) ? countElements(x) : x;
    if (first === x) count += 1;
    else count = count + first;
  }

  return count;
};

let result = countElements([1, [2, 2, 60], 3000, [-4, 500, 6, 28]]);
console.log(result);
