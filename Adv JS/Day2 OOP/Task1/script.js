// - Shape
//     1. Display the area and perimeter of an object created from using Rectangle
//     Constructor that has width and height properties and 2 extended methods (using
//     prototype property) for calculating area, perimeter (last day task).
//     a. Override toString() function to display a message declaring the width, height,
//     area and perimeter of the created object.
//     b. Create Class Property that counts numbers of created objects and Class
//     method to retrieve it.
// 2. Make proper updates in your previous code of generating Rectangle object that
// should inherit from Shape Constructor, and create your Square constructor that
// inherits from Rectangle.circle Constructor inherete from square
// 3. Prevent creating any object from shape, allow creation of only rectangles and square
// 💫 `Bonus` allow creation of only one square and one rectangle.
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function Shape() {
  if (new.target === Shape) {
    throw new Error("Cannot create an instance of Shape directly.");
  }
}

Shape.shapeCount = 0;


function Rectangle(width, height, color, name) {
  if (Shape.shapeCount >= 2) {
    throw new Error("Only one rectangle can be created.");
  }
  Shape.call(this);
  this.width = width;
  this.height = height;
  this.color = color;
  this.name = name;

  Shape.shapeCount++;
}

Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.area = function () {
  return this.width * this.height;
};

Rectangle.prototype.perimeter = function () {
  return 2 * (this.width + this.height);
};

Rectangle.prototype.toString = function () {
  return `Rectangle: width: ${this.width}, 
    height: ${this.height}, area: ${this.area()},
     perimeter: ${this.perimeter()}`;
};


function Square(side) {
  if (Shape.shapeCount >= 2) {
    throw new Error("Only one square can be created.");
  }
  Rectangle.call(this, side, side, "blue", "square");
}

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;

Square.prototype.toString = function () {
  return `Square: width: ${this.width}, 
    height: ${this.height},
     area: ${this.area()}, 
     perimeter: ${this.perimeter()}`;
};


function Circle(radius) {
  if (Shape.shapeCount >= 3) {
    throw new Error("Only one circle can be created.");
  }
  Shape.call(this);
  this.radius = radius;


  Shape.shapeCount++;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.area = function () {
  return Math.PI * Math.pow(this.radius, 2);
};

Circle.prototype.perimeter = function () {
  return 2 * Math.PI * this.radius;
};

Circle.prototype.toString = function () {
  return `Circle: radius: ${this.radius},
     area: ${this.area()}, 
     perimeter: ${this.perimeter()}`;
};


try {
  const rect = new Rectangle(10, 20, "red", "rectangle");
  console.log(rect.toString());
  console.log("Area:", rect.area());
  console.log("Perimeter:", rect.perimeter());

  const sqr = new Square(10);
  console.log(sqr.toString());
  console.log("Area:", sqr.area());
  console.log("Perimeter:", sqr.perimeter());

  const circle = new Circle(5);
  console.log(circle.toString());
  console.log("Area:", circle.area());
  console.log("Perimeter:", circle.perimeter());


  // errorsss
  
  // const anotherRect = new Rectangle(15, 25, "green", "another rectangle");
  // const anotherSqr = new Square(15);
  // const anotherCircle = new Circle(10);
} catch (error) {
  console.error(error.message);
}
