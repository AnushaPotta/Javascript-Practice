//Write a function removeDuplicates(arr) that takes an array and
// returns a new array with duplicate elements removed, keeping the original order.
const removeDuplicates = (arr) => {
  const newArr = [];

  for (let x of arr) {
    let isDuplicate = false;

    for (let i = 0; i < newArr.length; i++) {
      if (x === newArr[i]) {
        isDuplicate = true;
        break;
      }
    }
    if (isDuplicate === false) newArr.push(x);
  }

  return newArr;
};

let result = removeDuplicates([1, 2, 3, 2, 4, 1, 5]);
console.log(result);
