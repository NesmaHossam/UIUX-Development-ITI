// 2.1 Write a script that ask the user to Enter the value of a circle’s radius in order to calculate
// // its area.
// 2.2 Enter another value to calculate its square root and alert the result.

do {
  var radius = prompt("please Enter a number");
} while (isNaN(radius) || radius === "");
var area = Math.ceil(Math.PI * Math.pow(radius, 2));
document.write("<h1>area of circle is " + area + "</h1>");
var sqrt = Math.ceil(Math.sqrt(radius));
document.write("<h1>square root of circle is " + sqrt + "</h1>");
