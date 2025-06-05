//Write a function reverseString(str) that takes a string and returns it reversed using recursion.

const reverseString = (str) => {
  if (str === "") return "";

  return str[str.length - 1] + reverseString(str.slice(0, -1));
};

let result = reverseString("javascript");
console.log(result);
