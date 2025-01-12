import { Shape } from "./shape.js";

export class Rectangle extends Shape {
  constructor(width, height) {
    super(width);
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }

  perimeter() {
    return 2 * (this.width + this.height);
  }

  toString() {
    return `width: ${this.width}, height: ${
      this.height
    }, area: ${this.area()}, perimeter: ${this.perimeter()}`;
  }
}
