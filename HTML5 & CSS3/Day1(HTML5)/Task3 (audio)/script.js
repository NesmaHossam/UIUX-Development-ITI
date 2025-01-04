
var audio = document.getElementsByTagName("audio")[0];
var vol = document.getElementsByTagName("input")[0];
var time = document.getElementsByTagName("input")[1];
audio.addEventListener("timeupdate", function () {
  time.value = audio.currentTime;
});
window.addEventListener("load", function () {
  time.max = audio.duration; 
  //range max
  // console.log()
});
function changeTime() {
  audio.currentTime = time.value;
}
function changeVol() {
  audio.volume = vol.value;
}
function playaudio() {
  audio.play();
}
function pauseAudio() {
  audio.pause();
}
function stopAudio() {
  audio.load();
  audio.pause();
}
function muteAudio() {
  audio.muted = !audio.muted;
}
var candy = document.getElementById("candy");
var sup = document.getElementById("sup");
var mario = document.getElementById("mario");
var mm = document.getElementById("mm");

var img = document.getElementById("img");

candy.addEventListener("click", function () {
  img.setAttribute("src", "mario.jpeg");
  audio.setAttribute("src", "superr.mp3");
});

sup.addEventListener("click", function () {
  img.setAttribute("src", "cairokee.jpeg");
  audio.setAttribute("src", "cairoki.mp3");
});

mario.addEventListener("click", function () {
  img.setAttribute("src", "hamakii.jpeg");
  audio.setAttribute("src", "hamiki.mp3");
});
