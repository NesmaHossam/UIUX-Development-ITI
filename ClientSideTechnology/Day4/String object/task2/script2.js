// 1.2 write a script that accepts a string from user through prompt and count the number of
// ‘e’ characters in it.


var string = prompt("please Enter a string");
var count = 0;
for (var i = 0; i < string.length; i++) {
  if (string[i] == "e") {
    count++;
  }
}
document.write("<h1> total number "+count+"</h1>");