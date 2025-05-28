//Write a function reverseWords(str) that takes a string (sentence) and 
// returns a new string where each word is reversed, but the word order remains the same.

function reverseWords(str) {
let arr = str.split(" ");

let newarr;
newarr = arr.map(function(word) {

return word.split("").reverse().join("");

});

return newarr.join(" ");
}
console.log(reverseWords("Hello World"));