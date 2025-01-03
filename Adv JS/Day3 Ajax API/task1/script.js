var btn = document.getElementsByTagName("button")[0];
var usersContainer = document.getElementsByClassName("users")[0];
var loader = document.getElementsByClassName("loader")[0];
var error = document.getElementsByClassName("error")[0];
var empty = document.getElementById("empty");
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");

btn.addEventListener("click", function () {
  loader.classList.remove("error");
  xhr.send();
});

xhr.addEventListener("readystatechange", function () {
  if (xhr.readyState == 3) {
    loader.classList.remove("error");
  }
  if (xhr.readyState == 4) {
    if (xhr.status == 200) {
      setTimeout(function () {
        loader.classList.add("error");

        var usersArr = JSON.parse(xhr.response);
        if (usersArr.length == 0) {
          empty.classList.remove("error");
        } else {
          empty.classList.add("error");
          displayUsers(usersArr);
        }
      }, 2000);
    } else {
      error.classList.remove("error");
    }
  }
});
function displayUsers(arr) {
  console.log(arr);
  usersContainer.innerHTML = "";
  arr.forEach(function (user) {
    var userDiv = document.createElement("div");
    userDiv.innerHTML = `
    <div class=containerStyle> 
    <h2>${user.title}</h2>
      <p>${user.body}</p></div>
     
    `;
    usersContainer.appendChild(userDiv);
  });
}
