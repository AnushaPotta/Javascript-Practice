//Write a function isPalindrome(str) that returns true
//if the given string is a palindrome, and false otherwise.

const isPalindrome = (str) => {
  str = str.toLowerCase().replace(/\s/g, "");

  if (str.length <= 1) return true;

  if (str[0] === str[str.length - 1]) {
    return isPalindrome(str.slice(1, -1));
  }

  return false;
};
let result = isPalindrome("racecaR  ");
console.log(result);
