//Write a function capitalizeWords(str) that takes a sentence as input and
//returns a new string where the first letter of each word is capitalized
//and the rest remain lowercase.
const capitalizeWords = (str) => {
  let arr = str.toLowerCase().split(" ");
  let upperCaseStr = "";
  for (let x of arr) {
    let capitalized = x.charAt(0).toUpperCase() + x.slice(1);
    upperCaseStr += capitalized + " ";
  }

  return upperCaseStr.trim();
};

let result = capitalizeWords("i like javascript");
console.log(result);
