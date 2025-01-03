// 1. Write a function that takes any number of parameters and returns them reversed using
// array’s reverse function.



function reverse() {
  let arr = Array.from(arguments);
  arr.reverse();
  return arr;
}

console.log(reverse(1, 2, 3, 4, 5));
