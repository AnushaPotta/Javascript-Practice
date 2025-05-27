function fizzBuzz(n) {
  let seq = "";
   for (let i=1; i<=n; i++) {
     if((i%3) === 0 && (i%5)=== 0){
      seq += "fizzBuzz\n";
     }
     
     else if((i%3) === 0 ){
      seq += "fizz\n";
     }
     else if((i%5)=== 0) {
     seq += "Buzz\n";
     }
   else {
   seq += `${i}\n`;
   }
   }
   return seq;
}
let x = fizzBuzz(15);
console.log(x);