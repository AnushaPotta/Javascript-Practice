//Write a function factorial(n) that returns the factorial of a number
const factorial = (n) => {
  let f = 1;

  for (let i = n; i > 0; i--) {
    f = i * f;
  }

  return f;
};

let result = factorial(5);
console.log(result);
