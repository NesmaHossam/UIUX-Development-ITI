// - Generator `bonus`

//     Create a generator that returns fibonacci series that takes only

//     one parameter. Make two different implementations as described below:

//     1. the parameter passed determines the number of elements

//     displayed from the series.

//     1. the parameter passed determines the max number of the displayed series should not exceed its value.
//////////////////////////////////////////////////////////////////////////////////

function* fibonacciCount(count) {
  let a = 0,
    b = 1;
  for (let i = 0; i < count; i++) {
    yield a;
    [a, b] = [b, a + b];
  }
}

function* fibonacciMax(max) {
  let a = 0,
    b = 1;
  while (a <= max) {
    yield a;
    [a, b] = [b, a + b];
  }
}

let i = fibonacciCount(5);
console.log(i.next());
console.log(i.next());
console.log(i.next());
console.log(i.next());
console.log(i.next());
console.log(i.next());
console.log(i.next());
console.log(i.next());

console.log("/////////////////////////////");

let n = fibonacciMax(13);
console.log(n.next());
console.log(n.next());
console.log(n.next());
console.log(n.next());
console.log(n.next());
console.log(n.next());
console.log(n.next());
console.log(n.next());
console.log(n.next());
console.log(n.next());
console.log(n.next());
console.log(n.next());
