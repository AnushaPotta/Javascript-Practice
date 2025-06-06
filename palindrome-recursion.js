//Write a function isPalindrome(str) that returns true
//if the given string is a palindrome, and false otherwise.

const isReverse = (str) => {
  str = str.toLowerCase().replace(/\s/g, "");
  if (str.length <= 1) return str;
  else return str[str.length - 1] + isReverse(str.slice(0, -1));
};
const isPalindrome = (str) => {
  str = str.toLowerCase().replace(/\s/g, "");

  let revStr = isReverse(str);
  if (revStr === str) return true;
  else return false;
};
let result = isPalindrome("racecaR  ");
console.log(result);
