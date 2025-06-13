//Given an array of words, return the word that appears the most number of times.
const names = ["apple", "ball", "apple", "ball", "cat", "cat", "cat"];

const countArr = names.reduce((acc, name) => {
  const lowercaseName = name.toLowerCase();

  if (!acc[lowercaseName]) acc[lowercaseName] = 1;
  else acc[lowercaseName] += 1;

  return acc;
}, {});

console.log(countArr);

let max = 0;
let mostFrequent = "";

for (let x in countArr) {
  if (countArr[x] > max) {
    max = countArr[x];

    mostFrequent = x;
  }
}

console.log(`Most frequent word: ${mostFrequent}, frequency: ${max}`);
