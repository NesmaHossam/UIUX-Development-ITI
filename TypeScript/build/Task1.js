"use strict";
// TypeScript
// Question: Create a function that takes literal types "red" | "yellow" | "blue" and returns their hexcode colors
function getColorCode(color) {
    switch (color) {
        case "red":
            return "#FF0000";
        case "yellow":
            return "#FFFF00";
        case "blue":
            return "#0000FF";
        default:
            throw new Error("invalid color");
    }
}
console.log(getColorCode("red"));
console.log(getColorCode("yellow"));
console.log(getColorCode("blue"));
// console.log(getColorCode("green"));
