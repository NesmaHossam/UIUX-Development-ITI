// On your page, show alert for the user that say “Welcome to my site”, then show him
// prompt ask him to enter his name The user has to choose either (red, green or blue
// color), take his choice via prompt and write to the page “welcome + his name”
// alert("Welcome to my site");

do {
  var username = prompt("enter your name");
} while (!username);
var Colorr = prompt("choose one of each color red,green,blue");

switch (Colorr) {
  case "red":
    break;
  case "green":
    break;
  case "blue":
    break;

  default:
    Colorr = "yellow";
}

document.write(
  "<h1 style=color:" + Colorr + ">" + "Welcome " + username + "</h1>"
);
