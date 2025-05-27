function arr2d(arr) {
   let largearr = [];
   let l = arr.length;

   for (let i=0; i<l; i++) {
   let largest = arr[i][0];
    for ( let j=1; j<arr[i].length; j++) {
      if (arr[i][j] > largest) {
        largest = arr[i][j];

      }
    }
       largearr.push(largest);

   }

return largearr;


}

let result = arr2d([[1,2,4], [4,10,6], [6,7,9]]);
console.log(result);