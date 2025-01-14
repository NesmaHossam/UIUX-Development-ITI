

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
  submit.addEventListener("click", function () {
    userNameValidation();
    validationEmail();
    validationMobile();
    validationAddress();
    validationGender();
  });

  // validation for name
  function userNameValidation() {
    if (userName.value == "") {
      nameError.style.display = "block";
      nameError.innerHTML = "this feild is required";
    } else if (
      isFinite(userName.value) ||
      /^[A-Za-zÀ-ÿ]+([ '-][A-Za-zÀ-ÿ]+)*$/.test(userName.value) === false
    ) {
      nameError.style.display = "inline";
      nameError.innerHTML = "please enter a valid name";
    } else {
      nameError.style.display = "none";
      message.innerText =
        "Hello " + userName.value + " your email is " + email.value;
      val = "";
    }
  }
  // validation for email
  function validationEmail() {
    if (email.value == "") {
      emailError.style.display = "block";
      emailError.innerHTML = "this feild is required";
    } else if (
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
        email.value
      ) === false
    ) {
      emailError.style.display = "block";
      emailError.innerHTML = "please enter a valid email";
    } else {
      emailError.style.display = "none";
    }
  }
  // validation for mobile
  function validationMobile() {
    if (mobile.value == "") {
      mobileError.style.display = "block";
      mobileError.innerHTML = "this feild is required";
    } else if (
      !/^(?:\+?\d{1,3})?[-.\s]?(\d{10}|\d{3}[-.\s]?\d{3}[-.\s]?\d{4})$/.test(
        mobile.value
      )
    ) {
      mobileError.style.display = "block";
      mobileError.innerHTML = "please enter a valid mobile number";
    } else {
      mobileError.style.display = "none";
    }
  }
  // validation for address
  function validationAddress() {
    if (address.value == "") {
      addressError.style.display = "block";
      addressError.innerHTML = "this feild is required";
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
    }
  }
  // validation for gender
  function validationGender() {
    if (male.checked == false && female.checked == false) {
      genderError.style.display = "block";
      genderError.innerHTML = "this feild is required";
    } else {
      genderError.style.display = "none";
    }
  }

