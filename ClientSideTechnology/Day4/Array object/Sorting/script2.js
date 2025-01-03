// 3.2 Fill an array of 5 elements from the user, sort it in descending and ascending
// orders then display the output as shown in Fig



document.write("<h1>Sorting</h1><hr>");


var arr = [];
for (var i = 0; i < 5; i++) {
    var input;
    do {
        input = prompt("Please enter a number");
    } while (isNaN(input) || input === ""); 
    arr[i] = Number(input); 
}

document.write("<h1> <span style='color:red'>ur've entered the values of </span>" + arr + "</h1>");

// ASCII
arr.sort((a,b) => a-b);  
document.write("<h1> <span style='color:red'>ur values being sorted ascending </span>" + arr + "</h1>");
arr.sort((a,b) => b-a);
document.write("<h1> <span style='color:red'>ur values being sorted descending </span> " + arr + "</h1>");







