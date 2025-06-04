//Write a function makeCounterWithReset() that returns an object with two methods:

//increment() → increases the counter by 1 and returns the current value.

//reset() → resets the counter back to 0.
const makeCounterWithReset = () => {
  let count = 0;
  const obj = {
    increment: function () {
      count = count + 1;
      return count;
    },
    reset: function () {
      count = 0;
      return count;
    },
  };
  return obj;
};

const x = makeCounterWithReset();
console.log(x.increment());

console.log(x.increment());
console.log(x.increment());
console.log(x.reset());
console.log(x.increment());
