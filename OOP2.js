//Make the following code work as expected:

// Expected Output:
// Alice is 30 years old.
// Bob is 25 years old.

//const person1 = new Person("Alice", 30);
//const person2 = new Person("Bob", 25);

//person1.describe();
//person2.describe();

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  describe() {
    console.log(`${this.name} is ${this.age} years old.`);
  }
}

const person1 = new Person("Alice", 30);
const person2 = new Person("Bob", 25);

person1.describe();
person2.describe();
