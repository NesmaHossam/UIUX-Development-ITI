var text = document.getElementById("text");
var mssg = "Hello World";
var i = 0;

console.log(mssg.slice(0, 1));

setInterval(() => {
  if (i < mssg.length+1) {
    text.innerHTML = mssg.slice(0, i++);
  }
}, 100);
setTimeout(() => window.close(), 5000);
