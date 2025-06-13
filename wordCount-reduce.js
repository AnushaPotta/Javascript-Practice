const names = ["Apple", "Apricot", "Ball", "Ball", "Cat", "Car", "dog", "Dog"];

const wordCount = names.reduce((acc, name) => {
  const Uname = name.toUpperCase();

  if (!acc[Uname]) acc[Uname] = 1;
  else acc[Uname] += 1;

  return acc;
}, {});

console.log(wordCount);
