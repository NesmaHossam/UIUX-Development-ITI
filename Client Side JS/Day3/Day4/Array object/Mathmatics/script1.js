// 3.1 Fill an array of 3 elements from the user, and apply each of the following mathematical
// operations on it (+, *, /). Format the output as shown in Fig
// should contain validation for giving the user number only



document.write("<h1 style='text-align:center'>Adding - Multiplying - and Dividing  3 values</h1><hr>");

var arr = [];
for (var i = 0; i < 3; i++) {
    var input;
    do {
        input = prompt("Please enter a number");
    } while (isNaN(input) || input === ""); 
    arr[i] = Number(input); 
}

var sum = arr[0] + arr[1] + arr[2];
var mul = arr[0] * arr[1] * arr[2];
var div = arr[1] !== 0 && arr[2] !== 0 ? arr[0] / arr[1] / arr[2] : "Division by zero not allowed"; 


document.write("<h1><span style='color:red'>sum of the three values is </span>"  + arr[0] + " + " + arr[1] + " + " + arr[2] + " = " + sum +  "</h1>");
document.write("<h1><span style='color:red'>multiplication of the three values is </span>" + arr[0] + " * " + arr[1] + " * " + arr[2] + " = " + mul +  "</h1>");
document.write("<h1><span style='color:red'>division of the three values is </span>"  + arr[0] + " / " + arr[1] + " / " + arr[2] + " = " + div + "</h1>");




