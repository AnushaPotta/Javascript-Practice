//Challenge: Create a Student class that extends Person

//const student = new Student("Daisy", 20, "Mathematics");
//student.describe(); // Daisy is 20 years old and studies Mathematics.

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  describe() {
    console.log(`${this.name} is ${this.age} years old.`);
  }
}

class Student extends Person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }
  describe() {
    console.log(
      `${this.name} is ${this.age} years old and studies ${this.subject}.`
    );
  }
}
const person1 = new Person("Alice", 20);
person1.describe();

const student = new Student("Daisy", 20, "Mathematics");
student.describe(); // Daisy is 20 years old and studies Mathematics.
