// - Task1

//     On your page, show alert for the user that say “Welcome to my site”, then show him
//     prompt ask him to enter his name The user has to choose either (red, green or blue
//     color), take his choice via prompt and write to the page “welcome + his name”

// alert("Welcom to my site");

// do {
//   var username = prompt("enter your name");
// } while (!username);

// var mycolor = prompt("choose a color red ,green or blue");

// switch (mycolor) {
//   case "red":
//     break;
//   case "green":
//     break;
//   case "blue":
//     break;

//   default:
//     mycolor = "yellow";
// }

// document.write(
//   "<h1 style=color:" + mycolor + ">" + "Welcome " + username + "</h1>"
// );

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// - Task2

//     Ask the user to enter a message then display it using the different html heading tags
//     (from <h1> to <h6>) using Loops.

//     DO NOT write the header element explicitly in your script.

// var user = prompt("enter a message");

// for (var i = 1; i < 7; i++) {
//   document.write("<h" + i + ">" + user + "</h" + i + ">");
// }

// ////////////////////////////////////////////////////////////////////////////////////////////////////

// - Task3

//     Write a script that takes from the user n values and returns their sum, stop receiving
//     values from user when he enters 0 or sum exceeds 100, check that the entered data is
//     numeric and inform the user with the total sum of the entered values. (use do while
//     loop)


                        //   check again

// do{
//     uservalues=prompt("enter values")
//     var sum =0
// }
// while(uservalues ==0 && sum>100)
//     if(typeof uservalues && typeof sum)














// ///////////////////////////////////////////////////////////////////////////

// - Object
//     1. write a script that allows you to create a rectangle object that

//     • Should have width and height properties.
//     • Implement two methods for calculating its area and perimeter return value.
//     • Implement displayInfo() function to display a message declaring the width, height,
//     area and perimeter of the created object.

// var obj = {
//   width: 10,
//   height: 20,

//   area: function () {
//     return obj.width * obj.height;
//   },

//   perimeter: function () {
//     return 2 * (obj.width + obj.height);
//   },

//   displayInfo: function () {
//     return (
//       "width is " +
//       obj.width +
//       " height is " +
//       obj.height +
//       " area is " +
//       obj.area() +
//       " perimeter is " +
//       obj.perimeter()
//     );
//   },
// };

// var info =obj.displayInfo() ;

// document.write(info);

// ////////////////////////////////////////////////////////////////////////////////////////////////////

// - Functions

//     4.1. Create a function that accepts only 2 parameters and throw exception if number of
//     parameters either less than or exceeds 2 parameters.

//     4.2. Write your own function that can add n values ensure that all passing parameters are
//     numerical values only.

// 4.1.
// function sum(x, y) {
//   if (arguments.length == 2) {
//     return x + y;
//   } else {
//     throw "error";
//   }
// }

// var res = sum(2, 5);
// console.log(res);

// //////////////////////////////////////////////////////////////////////////

// 4.2.

// function addAll() {
//   for (i = 0; i < arguments.length; i++) {
//     if (typeof arguments.length !== "number") {
//       throw "this is not a number";
//     }
//   }

//   var sum = 0;
//   for (i = 0; i < arguments.length; i++) {
//     sum += arguments[i];
//   }
//   return sum;
// }

// var res = addAll(1, 2,9);
// console.log(res);
