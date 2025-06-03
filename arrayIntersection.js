//Write a function arrayIntersection(arr1, arr2) that takes two arrays
//and returns a new array containing the elements that are present in both
//arrays.
function arrayIntersection(arr1, arr2) {
  let newArr = [];
  newArr = arr1.filter((item, index) => arr2.includes(item));
  return newArr;
}

let result = arrayIntersection([1, 5, 6], [2, 5, 6]);
console.log(result);
