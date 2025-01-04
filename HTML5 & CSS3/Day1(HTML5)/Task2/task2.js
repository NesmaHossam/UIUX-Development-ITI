// const color = document.getElementById("color");
const output = document.getElementById("output");
// const copied = document.getElementById("copied");
const paragraph = document.getElementById("paragraph");

function colorChange() {
  const red = document.getElementById("red").value;
  const green = document.getElementById("green").value;
  const blue = document.getElementById("blue").value;
//   color.style.backgroundColor = `rgb(${red},${green},${blue})`;
  paragraph.style.color = `rgb(${red},${green},${blue})`;
  output.innerHTML = `rgb(${red},${green},${blue})`;
}




















// rgb
// output.addEventListener("click", () => {
//   let colorValue = output.innerHTML;
//   navigator.clipboard.writeText(colorValue);
//   copied.classList.add("active");
//   setTimeout(() => {
//     copied.classList.remove("active");
//   }, 2500);
// });
