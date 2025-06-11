//Given an array of people objects, return an array of names for those who are 18 or older.
const people = [
  { name: "Bob", age: 17 },
  { name: "Alice", age: 24 },
  { name: "Steve", age: 14 },
  { name: "Tara", age: 5 },
  { name: "John", age: 30 },
];

const getAdultNames = (people) => {
  const adults = people.filter((person) => person.age >= 18).map((p) => p.name);

  console.log(adults);
};

getAdultNames(people);
