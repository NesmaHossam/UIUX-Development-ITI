// Create a new page that has a button (Start clock), that showing alert saying “Clock Started” and displays clock with current time in local format (time only without date) in a div updated every second.
// a. Handle the onclick event of the (start clock) button using JavaScript (Not in the input tag).
// b. Stop the clock when user clicks (alt + w) letter, and show alert saying “Clock stopped”.

var btn = document.querySelector("button");
var clock = document.querySelector("#clock");
var interval
btn.addEventListener("click", () => {
  interval=setInterval(() => {
    clock.innerHTML = new Date().toLocaleTimeString();
  }, 1000);
});

btn.addEventListener("click", () => {
  alert("Clock Started");
});

document.addEventListener("keydown", (event) => {
  if (event.key === "w" && event.altKey) {
    alert("Clock stopped");
  }
  clearInterval(interval);
});
