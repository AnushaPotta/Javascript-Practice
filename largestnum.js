// finding largest number in an array

function largestnum(arr) {
  let l = arr.length;
  let largest = arr[0];
  for (let i=1; i<l; i++) {
      if (arr[i] > largest) {
        largest = arr[i];
      }
   }
return largest;
}
let result = largestnum([5,114,0,28]);
console.log(result);
