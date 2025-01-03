// Make your sign up page of a registration form to display a greeting for the user by his name in the home template.
// 1.  info needed(address, gender “radio button”, email, mobile).

// Note: The welcoming page is the page that should be displayed after registration.
// The registration form should contain fields for name, email, mobile, gender, address
// and show “timeout” that fires after 30 seconds if the user hasn’t entered any data

document
  .getElementById("registration-form")
  .addEventListener("submit", function (event) {

    var userName = document.getElementById("userName");
    var email = document.getElementById("email");
    var mobile = document.getElementById("mobile");
    var address = document.getElementById("address");
    var nameError = document.getElementById("nameError");
    var emailError = document.getElementById("emailError");
    var mobileError = document.getElementById("mobileError");
    var addressError = document.getElementById("addressError");

    var male = document.getElementById("male");
    var female = document.getElementById("female");
    var genderError = document.getElementById("genderError");
    var submit = document.querySelector("button");
    var message = document.querySelector(".btn");
    var timeoutMessage = document.getElementById("timeoutMessage");

    var timeout = setTimeout(function () {
      timeoutMessage.style.display = "block";
    }, 30000);

    submit.addEventListener("click", function () {
      clearTimeout(timeout);
      validateForm();
    });

    function validateForm() {
      var isValid = true;
      event.preventDefault();


      if (!userNameValidation()) {
        isValid = false;
        console.log("name");
      }
      if (!validationEmail()) {
        isValid = false;
        console.log("email");
      }
      if (!validationMobile()) {
        isValid = false;
        console.log("mobile");
      }
      if (!validationAddress()) {
        isValid = false;
        console.log("address");
      }
      if (!validationGender()) {
        isValid = false;
        console.log("gender");
      }
      console.log(isValid);
      if (isValid) {
        // message.innerText =
        //   "Hello " + userName.value + ", your email is " + email.value;
        console.log("hello");
        // sessionStorage.setItem("name", userName.value);
        window.location.href = "index3.html";
      }
    }

    // validation for name
    function userNameValidation() {
      if (userName.value == "") {
        nameError.style.display = "block";
        nameError.innerHTML = "this feild is required";
        return false;
      } else if (
        isFinite(userName.value) ||
        /^[A-Za-zÀ-ÿ]+([ '-][A-Za-zÀ-ÿ]+)*$/.test(userName.value) === false
      ) {
        nameError.style.display = "inline";
        nameError.innerHTML = "please enter a valid name";
        return false;
      } else {
        nameError.style.display = "none";
        // message.innerText =
        //   "Hello " + userName.value + " your email is " + email.value;
        // val = "";
        return true;
      }
    }
    // validation for email
    function validationEmail() {
      if (email.value == "") {
        emailError.style.display = "block";
        emailError.innerHTML = "this feild is required";
        return false;
      } else if (
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email.value) ===
        false
      ) {
        emailError.style.display = "block";
        emailError.innerHTML = "please enter a valid email";
        return false;
      } else {
        emailError.style.display = "none";
        return true;
      }
    }
    // validation for mobile
    function validationMobile() {
      if (mobile.value == "") {
        mobileError.style.display = "block";
        mobileError.innerHTML = "this feild is required";
        return false;
      } else if (
        !/^(?:\+?\d{1,3})?[-.\s]?(\d{10}|\d{3}[-.\s]?\d{3}[-.\s]?\d{4})$/.test(
          mobile.value
        )
      ) {
        mobileError.style.display = "block";
        mobileError.innerHTML = "please enter a valid mobile number";
        return false;
      } else {
        mobileError.style.display = "none";
        return true;
      }
    }
    // validation for address
    function validationAddress() {
      if (address.value == "") {
        addressError.style.display = "block";
        addressError.innerHTML = "this feild is required";
        return false;
      }
      // else if (
      //   !/^\d{1,5}\s[A-Za-z0-9\s.,'-]+(?:\s(Apt|Suite|Unit|#)\s?\d+)?[,.\s]?\s?[A-Za-z\s]+,\s?[A-Za-z\s]+,\s?\d{5}(-\d{4})?$/.test(
      //     address.value
      //   )
      // ) {
      //   mobileError.style.display = "block";
      //   mobileError.innerHTML = "please enter a valid Address";
      // }
      else {
        addressError.style.display = "none";
        return true;
      }
    }

    // validation for gender
    function validationGender() {
      if (male.checked == false && female.checked == false) {
        genderError.style.display = "block";
        genderError.innerHTML = "this feild is required";
        return false;
      } else {
        genderError.style.display = "none";
        return true;
      }
    }
  });
