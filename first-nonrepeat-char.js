
//Write a function firstNonRepeatingChar(str) that takes a string and 
//returns the first character that does not repeat anywhere in the string. 
//If all characters repeat, return null.


const firstNonRepeatingChar = str => {
const charArr = str.toLowerCase().split("");
let charMap = {};

for (let i=0; i<charArr.length; i++) {
let char = charArr[i];
if(charMap[char])
charMap[char] = charMap[char] + 1;
else
charMap[char] = 1;
}

for( let i=0; i<charArr.length; i++) {
let char = charArr[i];
if(charMap[char]===1)
return char;


}

return null;

}
let result = firstNonRepeatingChar("elephant");
console.log(result);
