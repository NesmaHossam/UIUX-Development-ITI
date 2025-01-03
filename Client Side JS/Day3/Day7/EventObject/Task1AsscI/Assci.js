// 1. Alert ASCII Code of any key pressed and detect whether it is alt key or ctrl key or shift key.

document.addEventListener("keydown", function (event) {
  const char = String.fromCharCode(event.keyCode);
  alert("ASCII Code of " + char + " is " + event.keyCode);
  if (event.altKey) {
    alert("Alt key is pressed");
  } else if (event.ctrlKey) {
    alert("Ctrl key is pressed");
  } else if (event.shiftKey) {
    alert("Shift key is pressed");
  }
  
 
});
