// 3. Make password input in Html, By JS When you click on the eye icon, the text appears and
// the icon changes.

var pass = document.getElementById("password");
var show = document.querySelector(".show");
show.addEventListener("click", function () {
  if (pass.type === "password") {
    pass.type = "text";
    show.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';
  } else {
    pass.type = "password";
    show.innerHTML = '<i class="fa-solid fa-eye"></i>';
  }
});
