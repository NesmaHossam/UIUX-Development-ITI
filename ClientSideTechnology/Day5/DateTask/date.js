//  Date task
//     1.1. Show prompt that ask user to enter his birth date and tell user to enter the
//     date in the following format (DD – MM – YYYY) ex. 22–01–1999, and then create
//     function that take user input as a parameter and ensure that the string is entered
//     in this format (that user entered string is 10 characters and contains (-) after the
//     second character and after fifth character).[Don't use RegExp, use string
//     functions].
//     a. If the user input was correct: make the function create new date object, and
//     initialize it with Day, Month, year values (using date constructor: Date(y,m,d)) and
//     then show alert to the user with the date in date string format.
//     b. If user input wasn't correct, show alert saying, "Wong Date Format".



var date = prompt(
  "Enter your date of birth in the following format (DD-MM-YYYY):"
);
function checkDate(date) {
  try {
    if (date.length == 10 && date[2] == "-" && date[5] == "-") {
      var day = date.slice(0, 2);
      var month = date.slice(3, 5) - 1; // Subtract 1 for zero-based index
      var year = date.slice(6, 10);
      var newDate = new Date(year, month, day);

      day = newDate.getDate();
      month = newDate.getMonth() + 1; // Add 1 to get the correct month number;
      year = newDate.getFullYear();

      var myMonth = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];

      alert(
        "Your date of birth is: " + day + " " + myMonth[month - 1] + " " + year
      );
    } else {
      throw "wrong date formate";
    }
  } catch (e) {
    alert(e);
  }
}

checkDate(date);









// toDateString()