//Challenge: Add a method to change age
//Update the Person class so this works:

//const p = new Person("Charlie", 40);
//p.describe();          // Charlie is 40 years old.
//p.haveBirthday();      // (this method increases age by 1)
//p.describe();          // Charlie is 41 years old.
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  describe() {
    console.log(`${this.name} is ${this.age} years old.`);
  }

  haveBirthday() {
    this.age = this.age + 1;
  }
}

const person1 = new Person("Charlie", 40);

person1.describe();
person1.haveBirthday();
person1.describe();
