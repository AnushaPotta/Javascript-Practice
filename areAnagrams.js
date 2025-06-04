//Write a function areAnagrams(str1, str2) that checks if two strings are
//anagrams of each other.
//Anagrams are words that contain the same characters in a different order,
//ignoring spaces and case.
const areAnagrams = (str1, str2) => {
  let arr1 = str1.replace(/\s/g, "").toLowerCase().split("").sort().join("");

  let arr2 = str2.replace(/\s/g, "").toLowerCase().split("").sort().join("");

  console.log(arr1);
  console.log(arr2);

  if (arr1 === arr2) return true;
  else return false;
};
let result = areAnagrams("listeN ", " Silent");
console.log(result);
