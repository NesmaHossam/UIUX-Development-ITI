// - Table display number of users

//     1.a Ask the user for number of persons wanted to be entered (the value
//     // should be a number)

// 1.b then ask for users’ information sequentially.
// name : length should be more than 3 and less than 10 characters
// age : should be greater than 10 and less than 60.

do {
  var num = prompt("Enter the number of users");
  if (isNaN(num) || num == "") {
    alert("Please enter a number");
  } else if (num <= 0) {
    alert("Please enter a positive number");
  } else {
    break;
  }
} while (true);



var table = document.getElementsByClassName("table")[0];
for (var i = 0; i < num; i++) {
  var tr = document.createElement("tr");
  var td1 = document.createElement("td");
  var td2 = document.createElement("td");


do{
    var username = prompt("Enter name");
    if (username.length < 3 || username.length > 10 ||username=="" ||!isNaN(username)) {
            alert("Name should be more than 3 and less than 10 characters");
            i--;
}
else{
    td1.innerHTML = username;
    tr.appendChild(td1);
    table.appendChild(tr);
    break;
}}
while(true);

do{
    var age = prompt("Enter age");
    if (age < 10 || age > 60) { 
        alert("Age should be greater than 10 and less than 60");
    i--;
  

}
else{
    td2.innerHTML = age;
    tr.appendChild(td2);
        table.appendChild(tr);
        break;
}}
while(true);
}


