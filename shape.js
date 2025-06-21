//You're going to build a base class called Shape and extend it to create a Circle class.

//✅ Expected Behavior:

//const circle = new Circle(5);
//console.log(circle.area());         // 👉 78.54 (approx)
//console.log(circle.describe());     // 👉 A circle with radius 5

class Shape {
  describe() {
    return "This is a shape";
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  area() {
    const A = Math.PI * this.radius * this.radius;
    return `Area of the circle is ${A}`;
  }

  describe() {
    return `A circle with radius ${this.radius}`;
  }
}

const circle1 = new Circle(5);
console.log(circle1.area());
console.log(circle1.describe());

const circle = new Shape();
console.log(circle.describe());
