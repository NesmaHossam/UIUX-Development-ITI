// 1.3 Write a script that reads from the user his info; validates and displays it with a
// // welcoming message.
// name should be character not a number
// phone number should be with lenght=8
// mobile number should be numbers with lenght=11  and starts with (010|011|012)

// email should use regular exp to validate that the email is formatted correctly(abc@123.com).(use RegExp)


do {
    var username = prompt("Enter your username:");
} while (!isNaN(username));

do {
    var phonenum = prompt("Enter your phone number (8 digits):");
} while (phonenum.length !== 8 || isNaN(phonenum));

do {
   var mobilenum = prompt("Enter your mobile number (starts with 010, 011, or 012):");
} while (!(mobilenum.startsWith("010") || mobilenum.startsWith("011") || mobilenum.startsWith("012")) || isNaN(mobilenum));

do {
   var email = prompt("Enter your email:");
} while (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email));

document.write("<h1>Welcome " + username + "<br>Your phone number is " + phonenum + "<br>Your mobile number is " + mobilenum + "<br>Your email is " + email + "</h1>");