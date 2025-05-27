function smallestIn2D(arr) {
   let l = arr.length;
   let smallest = arr[0][0];
  for (let i=0; i<l; i++) {
    for (let j=0; j<arr[i].length; j++) {
          if(arr[i][j] < smallest) {
        smallest = arr[i][j];
      }
      
    }

   } 
   return smallest;
}
let result = smallestIn2D([[-5, 12], [3, -2], [100, -1]]);
console.log(result);