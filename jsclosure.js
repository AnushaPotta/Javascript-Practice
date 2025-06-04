//Write a function makeCounter that returns a new function (a counter).
//Every time you call the returned function, it should return a number that
//increments by 1, starting from 1
function makeCounter() {
  let count = 0;

  return function counter() {
    count += 1;

    return count;
  };
}

const x = makeCounter();
console.log(x());
console.log(x());
console.log(x());
