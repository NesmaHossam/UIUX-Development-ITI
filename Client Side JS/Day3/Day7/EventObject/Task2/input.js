// 2.  Make your own input type number that accepts numbers only. “using event object”

var input = document.querySelector("input");
input.addEventListener("input", function (event) {
  input.value = input.value.replace(/[^0-9]/g, "");
});
