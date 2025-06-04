//Write a function chunkArray(arr, size) that splits an array into chunks
//(subarrays) of the specified size.

const chunkArray = (arr, size) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i += size) {
    const arrSlice = arr.slice(i, i + size);
    console.log(arrSlice);
    newArr.push(arrSlice);
  }

  return newArr;
};
let result = chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 2);
console.log(result);
