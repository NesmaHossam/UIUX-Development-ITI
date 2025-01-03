// Using Constructor method for creating Objects, write a script that allows
// you to create a rectangle object that :
// • Should have width and height properties.
// • Implement two methods for calculating its area and perimeter.
// • Implement displayInfo() function to display a message declaring the
// width, height, area and perimeter of the created object.

function Rectangle(width, height) {
  this.width = width;
  this.height = height;

  this.area = function () {
    return this.width * this.height;
  };

  this.perimeter = function () {
    return 2 * (this.width + this.height);
  };

  this.displayInfo = function () {
    console.log(`Width: ${this.width}, Height: ${this.height}`);
    console.log(`Area: ${this.area()}`);
    console.log(`Perimeter: ${this.perimeter()}`);
  };
}

var myRectangle = new Rectangle(20, 10);

myRectangle.displayInfo();
