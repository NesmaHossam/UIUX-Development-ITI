import { Rectangle } from "./rectangle.js";
import { Square } from "./square.js";
import { Circle } from "./circle.js";

const rectangle = new Rectangle(10, 20);
const square = new Square(10);
const circle = new Circle(10);

console.log(`Rectangle: ${rectangle.toString()}`);
console.log(`Square: ${square.toString()}`);
console.log(`Circle: ${circle.toString()}`);
