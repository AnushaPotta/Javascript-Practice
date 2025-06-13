//Given an array of words, return the word that appears the most number of times.
const names = ["apple", "ball", "apple", "ball", "cat", "cat", "cat"];

const countArr = names.reduce((acc, name) => {
  const lowercaseName = name.toLowerCase();

  if (!acc[lowercaseName]) acc[lowercaseName] = 1;
  else acc[lowercaseName] += 1;

  return acc;
}, {});

console.log(countArr);

const [mostFrequent, max] = Object.entries(countArr).reduce((acc, value) => {
  return acc[1] > value[1] ? acc : value;
});
console.log(`Most frequent word: ${mostFrequent}, frequency: ${max}`);
