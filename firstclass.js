class Dog {
  constructor(name) {
    this.name = name;
  }
  bark() {
    console.log(`${this.name} barks : Woof! Woof!`);
  }
}

const myDog = new Dog("Bruno");
console.log("Dog name:", myDog.name); // 👉 Dog name: Bruno
myDog.bark(); // 👉 Bruno barks: Woof! Woof!
