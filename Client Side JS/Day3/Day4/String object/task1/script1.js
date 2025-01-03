// 1.1 Write a script to determine whether the entered string is palindrome or not.
// 2-`Ask the user whether to consider case of the entered string or not, handle both cases in your
// script i.e. RADAR c MOOM are palindrome.
// 3-Note: raDaR is not a palindrome if user requested considering case of entered string.

do {
  var string = prompt("please enter a string");
} while (string === "" || !isNaN(string));
var chioce = confirm("Do you want to consider case of the entered string?").toLowerCase;

if (chioce) {
  string = string.toLowerCase();

} else {
  var reverse = string.split("").reverse().join("").toLowerCase();
}

if (string === reverse) {
  document.write("<h1>" + string + " is palindrome</h1>");
} else {
  document.write("<h1>" + string + " is not palindrome</h1>");
}





// do {
//  var string = prompt("Please enter a string");
// } while (string === "" || !isNaN(string));

// var chioce = confirm("Do you want to consider case of the entered string?");

// var processedString = chioce ? string : string.toLowerCase();
// var reverse = processedString.split("").reverse().join("");

// if (processedString === reverse) {
//   document.write("<h1>" + processedString + " is a palindrome</h1>");
// } else {
//   document.write("<h1>" + processedString + " is not a palindrome</h1>");
// }