//Write a function wordFrequency(str) that takes a string and returns an 
//object showing how many times each word appears.
const wordFrequency = str => {
const frequencyObj = {};
const wordArr = str.toLowerCase().split(" ");

wordArr.forEach(word => {
if(frequencyObj[word])
frequencyObj[word] += 1;
else
frequencyObj[word] = 1;
});

return frequencyObj;



}


let result = wordFrequency("I like books and flowers and birds");
console.log(result);
