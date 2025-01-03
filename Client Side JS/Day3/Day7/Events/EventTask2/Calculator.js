// Simple Calculator. Implement the required functions in an external file to let calculator.html
// works properly.



var input = document.getElementById("Answer");
function EnterNumber(num) {
  input.value += num; 
}
function EnterOperator(op) {
  input.value += op; 
}

function EnterEqual() {
  if (input.value === "") {
    input.value = "";
  } else {
    try {
      var result = eval(input.value);
      if (result === Infinity || result === -Infinity) {
        input.value = "can't divide by zero"; 
      } else {
        input.value = result; 
      }
    } catch (e) {
      input.value = "Error"; 
    }
  }
}

function EnterClear() {
  input.value = ""; 
}