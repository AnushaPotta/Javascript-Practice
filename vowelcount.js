//Write a function countVowels(str) that takes a string and
//returns the number of vowels (a, e, i, o, u) in it.
const countVowels = (str) => {
  let newstr = str.toLowerCase();
  let matchedVowels = newstr.match(/[aeiou]/g);

  return matchedVowels ? matchedVowels.length : 0;
};

let result = countVowels("bcde");
console.log(result);
