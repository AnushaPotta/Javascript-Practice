//Write a function factorial(n) that returns the factorial of a number using recursion.
const factorial = (n) => {
  if (n === 0) {
    return 1; //base case
  }

  return n * factorial(n - 1); //recursive case
};

let result = factorial(6);
console.log(result);
