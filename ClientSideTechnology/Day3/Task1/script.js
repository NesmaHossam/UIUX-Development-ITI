/* 
Write a script that takes from the user n values and returns their sum, stop receiving
values from user when he enters 0 or sum exceeds 100, check that the entered data is
numeric and inform the user with the total sum of the entered values. (use do while
loop)
*/

let sum = 0;
let n = 0;

do {
  n = Number(prompt("Enter a number: "));
  if (!isNaN(n)) {
    sum += n;
  } else {
    alert("Invalid input. Please enter a numeric value.");
  }

  if (n === 0 || sum>100){
    break;
  } 
} while (true);


  document.write("total is"+sum)
