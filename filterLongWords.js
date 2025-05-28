//Write a function filterLongWords(str, minLength)
//It should:
//Take a sentence str and a number minLength.
//Return a new sentence where:
//Only words longer than or equal to minLength are kept.
//Those words are transformed to uppercase.
//The output sentence should have words separated by spaces, just like the original.




function filterLongWords(str, minLength) {
let newstr = str.split(" ").filter(function(wordarr) {
return wordarr.length >= minLength; 
}).map(newword => newword.toUpperCase()).join(" ");

return newstr;

}
let result = filterLongWords("javascript programming is fun", 4);
console.log(result);