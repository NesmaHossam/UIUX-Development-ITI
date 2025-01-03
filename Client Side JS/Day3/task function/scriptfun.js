// 4.1. Create a function that accepts only 2 parameters and throw exception if number of
// parameters either less than or exceeds 2 parameters.

// function sum(x, y) {

//   if (arguments.length == 2) {
//     return x + y;

//   } else {
//     throw "error";
//   }
// }

// result = sum(2, 6);
// console.log(result);


// //////////////////////////////////////////////////////////////////
// 4.2. Write your own function that can add n values ensure that all passing parameters are
// numerical values only.

// function Add() {
//   for (let i = 0; i < arguments.length; i++) {
//     if (typeof arguments[i] !== "number") {
//       throw " error";
//     }
//   }
//   let sum = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     sum += arguments[i];
//   }
//   return sum;
// }

// var res = Add(1, 3, 4,"hh");
// console.log(res);
