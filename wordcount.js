//Write a function wordFrequency(str) that takes a string and 
//returns an object showing how many times each word appears.
const wordfrequency = str => {
const arr = str.split(" ");
const frequencyobj = {};
for( let i=0; i<arr.length;i++) {
const word = arr[i];

if(frequencyobj[word])
frequencyobj[word] += 1;
else 
frequencyobj[word] = 1;



}

return frequencyobj;

}

let result = wordfrequency("how do you do");
console.log(result);

