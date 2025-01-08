// // - Cookies
// //     Make your own .js library to create, display and delete cookies,
// //     the library should have the following functions:
// //     • `getCookie(cookieName)`:o Retrieves a cookie value based on a
// //     cookie name.
// //     • `setCookie(cookieName,cookieValue,expiryDate):` Sets a cookie
// //     based on a cookie name, cookie value, and expiration date.
// //     • `deleteCookie(cookieName)`: Deletes a cookie based on a cookie
// //     name.
// //     • `allCookieList():` returns a list of all stored cookies [[”name , “20”] , ]
// //     • `hasCookie(cookieName)`: Check whether a cookie exists or not

function save(e) {
  // e.preventDefault();
  let username = document.getElementById("username").value;
  let age = document.getElementById("age").value;
  let color = document.getElementById("color").value;
  let genderElement = document.querySelector('input[name="gender"]:checked');

  let gender = genderElement ? genderElement.value : "";

  console.log(gender);
  console.log(username);

  CookieManager.setCookie("username", username);
  CookieManager.setCookie("age", age);
  CookieManager.setCookie("color", color);
  CookieManager.setCookie("gender", gender);
  CookieManager.setCookie("visits", 0);

  let val = CookieManager.getCookie("visits");
  console.log(val);
  location.href="profile.html"
}

