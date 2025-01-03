// - Date

//     1.2. Make a function that takes date string as a parameter, and returns the Day
//     name (Saturday, Sunday,) of the given date.


do {
  var date = prompt("please Enter a date");
} while (date === "");
var day = new Date(date); 
      // constructor for instatnt class
function dayName(date) {
  switch (date.getDay()) {
    case 0:
      return "Sunday";
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";

    default:
      return "invalid date";
  }
}

var myday = dayName(day);
document.write("<h1> My day is " + myday + "</h1>");
