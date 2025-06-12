//Given an array of names, group them by their first letter.

const names = ["Apple", "Apricot", "Ball", "Bug", "Cat", "Car", "dog", "Doll"];

const groupedArr = names.reduce((acc, name) => {
  const firstLetter = name[0].toUpperCase();

  if (!acc[firstLetter]) acc[firstLetter] = [name];
  else acc[firstLetter].push(name);

  return acc;
}, {});

console.log(groupedArr);
