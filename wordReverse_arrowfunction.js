//Write a function reverseWords(str) that takes a string (sentence) and 
//returns a new string where each word is reversed, but the word order remains the same.
const reverseWords = str => 
str.split(" ").map(word => word.split("").reverse().join("")).join(" ");

let result = console.log(reverseWords("Hello World"));