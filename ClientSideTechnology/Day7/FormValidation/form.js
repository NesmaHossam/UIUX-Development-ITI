// Create a simple form with Add and Reset buttons takes user`s information (name age and email) with validation for each field and all fields are required.
// Every time the user enters a right data and press Add button the data is displayed in the table as shown in fig 3

function submitForm() {
  var userName = document.getElementById("name");
  var age = document.getElementById("age");
  var email = document.getElementById("email");

  var nameError = document.getElementById("nameError");
  var ageError = document.getElementById("ageError");
  var emailError = document.getElementById("emailError");

  var isValid = true;

  //   name validation
  if (userName.value.trim() === "") {
    nameError.style.display = "block";
    nameError.innerHTML = "This field is required";
    isValid = false;
  } else if (!userName.value || isFinite(userName.value)) {
    nameError.style.display = "block";
    nameError.innerHTML = "Enter a valid name";
    isValid = false;
  }

  
  //   age validation

  if (age.value.trim() === "") {
    ageError.style.display = "block";
    ageError.innerHTML = "This field is required";
    isValid = false;
  } else if (!age.value || isNaN(age.value)) {
    ageError.style.display = "block";
    ageError.innerHTML = "Enter a valid age";
    isValid = false;
  }

  //   email validation
  if (email.value.trim() === "") {
    emailError.style.display = "block";
    emailError.innerHTML = "This field is required";
    isValid = false;
  } else if (
    !email.value ||
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email.value) ===
      false
  ) {
    emailError.style.display = "block";
    emailError.innerHTML = "Enter a valid email";
    isValid = false;
  }



  if (isValid) {
    var tableBody = document.getElementById("tableBody");
    var newRow = document.createElement("tr");

    newRow.innerHTML = `<td>${userName.value}</td>
            <td>${age.value}</td>
            <td>${email.value}</td>
            `;
    var visability = document.querySelector(".table-container");
    visability.classList.remove("hidden");
    tableBody.appendChild(newRow);

    resetForm();
  }
}

function resetForm() {
  document.getElementById("name").value = "";
  document.getElementById("age").value = "";
  document.getElementById("email").value = "";

  document.getElementById("nameError").style.display = "none";
  document.getElementById("ageError").style.display = "none";
  document.getElementById("emailError").style.display = "none";
}
