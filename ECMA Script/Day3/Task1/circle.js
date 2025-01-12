import { Shape } from "./shape.js";

export class Circle extends Shape {
  constructor(radius) {
    super(radius);
  }

  area() {
    return Math.PI * this.width * this.width;
  }

  perimeter() {
    return 2 * Math.PI * this.width;
  }

  toString() {
    return `radius: ${
      this.width
    }, area: ${this.area()}, perimeter: ${this.perimeter()}`;
  }
}
