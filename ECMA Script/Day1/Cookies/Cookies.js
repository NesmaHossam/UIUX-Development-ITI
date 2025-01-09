// - Cookies
//     Make your own .js library to create, display and delete cookies,
//     the library should have the following functions:
//     • `getCookie(cookieName)`:o Retrieves a cookie value based on a
//     cookie name.
//     • `setCookie(cookieName,cookieValue,expiryDate):` Sets a cookie
//     based on a cookie name, cookie value, and expiration date.
//     • `deleteCookie(cookieName)`: Deletes a cookie based on a cookie
//     name.
//     • `allCookieList():` returns a list of all stored cookies [[”name , “20”] , ]
//     • `hasCookie(cookieName)`: Check whether a cookie exists or not

const CookieManager = {
  getCookie: function (cookieName) {
    const name = cookieName + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookiesArray = decodedCookie.split(";");
    for (let i = 0; i < cookiesArray.length; i++) {
      let cookie = cookiesArray[i].trim();
      if (cookie.indexOf(name) === 0) {
        return cookie.substring(name.length, cookie.length);
      }
    }
    return "";
  },
  setCookie: function (cookieName, cookieValue) {
    document.cookie = cookieName + "=" + cookieValue;
    console.log(document.cookie);
  },
  deleteCookie: function (cookieName) {
    // this.setCookie(cookieName, "", -1);
    const d = new Date(12 - 10 - 2024);
    document.cookie = cookieName + "= jj; expires=" + d;
  },
  allCookieList: function () {
    const cookiesArray = document.cookie.split(";");
    const cookieList = [];
    for (let cookie of cookiesArray) {
      cookie = cookie.trim();
      const [name, value] = cookie.split("=");
      cookieList.push([name, value]);
    }
    return cookieList;
  },
  hasCookie: function (cookieName) {
    return this.getCookie(cookieName) !== "";
  },
};
