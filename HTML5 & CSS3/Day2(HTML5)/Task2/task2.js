function save() {
  var username = document.getElementById("input").value;
  var userEmail = document.getElementById("email").value;
  var checkbox = document.getElementById("check");
  if (checkbox.checked) {
    var userData = {
      username: username,
      email: userEmail,
    };
    localStorage.setItem("storedItem", JSON.stringify(userData));
  } else {
    localStorage.removeItem("storedItem");
  }
}

window.onload = function () {
  var storedItem = localStorage.getItem("storedItem");
  if (storedItem) {
    var userData = JSON.parse(storedItem);
    document.getElementById("input").value = userData.username;
    document.getElementById("email").value = userData.email;
    l;
    document.getElementById("check").checked = true;
  }
};
