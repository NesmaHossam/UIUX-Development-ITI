// // find out the rockbands.json file to make a page with 2 dropdown lists,
// // the 1 st one is filled with the band and the 2nd one is filled with the
// // artist after selecting a band from its dropdown list. Once the user
// // selects an artist of the band; open his link.

var btn = document.getElementsByTagName("button")[0];
var dropdown = document.getElementsByClassName("dropdown-content")[0];
var dropdown2 = document.getElementsByClassName("dropdown-content2")[0];

var loader = document.getElementsByClassName("loader")[0];
var error = document.getElementsByClassName("error")[0];
var empty = document.getElementById("empty");
var xhr = new XMLHttpRequest();
xhr.open("GET", "rockbands.json");

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
  dropdown.innerHTML = "";

  for (key in arr) {
    var list = document.createElement("a");
    list.innerText = key;
    list.addEventListener("click", function (e) {
      dropdown2.innerHTML = "";
      displayArtist(arr, e.target.innerText);
    });

    dropdown.appendChild(list);
  }
}

function displayArtist(arr, key) {
  dropdown2.innerHTML = "";

  arr[key].forEach(function (artist) {
    var list2 = document.createElement("a");
    list2.innerText = artist.name;
    list2.addEventListener("click", function (e) {
      window.location.href = artist["value"];
    });
    dropdown2.appendChild(list2);
  });
}
