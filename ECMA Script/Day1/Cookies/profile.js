let username = CookieManager.getCookie("username");
let age = CookieManager.getCookie("age");
let color = CookieManager.getCookie("color");
let gender = CookieManager.getCookie("gender");
let visits = CookieManager.getCookie("visits");

visits++;
CookieManager.setCookie("visits", visits);

const profilePic = gender === "male" ? "male.avif" : "female.avif";
document.body.innerHTML = `<div style="color:${color} ; text-align: center"><img src="${profilePic}" alt="Profile Picture" style="width: 100px; height: 100px;" /><br>
<h1>Hello ${username} </h1>

<p id="p">number of visiting:${visits}</p>

<button id="btn" style=" background-color: blueviolet;   width: 150px;
  padding: 7px;
  border-radius: 5px; border: none; color: white">logout</button>
</div>`;

// console.log(p)

btn.addEventListener("click", () => {
  CookieManager.deleteCookie("username");
  CookieManager.deleteCookie("age");
  CookieManager.deleteCookie("color");
  CookieManager.deleteCookie("gender");
  CookieManager.deleteCookie("visits");
  location.href = "form.html";
});
