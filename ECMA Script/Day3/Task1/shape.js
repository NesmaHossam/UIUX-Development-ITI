// - OOP
//     1. Using ES6 new Syntax & features:
//     Write a script to create different shapes (rectangle, square, circle) make
//     all of them inherits from shape class.
//     a. each shape contains two functions to calculate its area and its
//     parameter.
//     b. Display the area and each object parameter in your console by
//     overriding toString().
//     c. Make your classes in an external file and import them in a module
//     to create objects.
// ///////////////////////////////////////////////////////////////////////////////

export class Shape {
  constructor(width) {
    this.width = width;
  }

  area() {
    return 0;
  }

  toString() {
    return `width: ${this.width}`;
  }
}
