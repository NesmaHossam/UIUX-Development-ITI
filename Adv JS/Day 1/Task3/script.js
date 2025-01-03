// - Library
//     1. Make a function constructor to create a book object every book should
//     have (name, price, author) properties.
//     2.  the author is a function constructor too that has (name and email property).
//     3. Then make your own interface and ask the user for number of books
//     would be entered as fig a
//     4. Create an array of books objects and fill its data from the user throw a
//     validated form.
//     5. After the user enters the needed data for all number of books fill a table
//     with this data each row contains a book info with edit and delete
//     buttons
//     o Edit button: when it clicked all table fields be editable so the user
//     could update the book info and could save the changes or cancel
//     it
//     o Delete button: will delete the book and whole row.

//     Note: any changes made on the books should updates the array of the books
//     objects.

function Author(name, email) {
  this.name = name;
  this.email = email;
}

function Book(name, price, author) {
  this.name = name;
  this.price = price;
  this.author = author;
}

const books = [];

// code for book management
document
  .getElementById("submitNumBooks")
  .addEventListener("click", function () {
    const numBooks = parseInt(document.getElementById("numBooks").value);
    if (numBooks > 0) {
      document.getElementById("bookForm").style.display = "block";
      createBookForms(numBooks);
    }
  });

// code for Enter Book Details
function createBookForms(num) {
  const formContainer = document.getElementById("formContainer");
  formContainer.innerHTML = "";
  for (let i = 0; i < num; i++) {
    formContainer.innerHTML += `
            <div><br>
                <h4>Book ${i + 1}</h4><br>
                <label>Name:</label>
                <input type="text" class="bookName" required>
                <div class="error nameError">This field is required</div>
                <label>Price:</label>
                <input type="number" class="bookPrice" required><br>
                <div class="error priceError">Please enter a valid price</div>
              <br>  <label>Author Name:</label>
                <input type="text" class="authorName" required>
                <div class="error authorNameError">This field is required</div>
                <label>Author Email:</label>
                <input type="email" class="authorEmail" required>
                <div class="error emailError">Please enter a valid email</div>
            </div>
        `;
  }

  document.getElementById("bookManagement").style.display = "none";

}

// code for Save Books if the validation true
document.getElementById("saveBooks").addEventListener("click", function () {
  const bookNames = document.getElementsByClassName("bookName");
  const bookPrices = document.getElementsByClassName("bookPrice");
  const authorNames = document.getElementsByClassName("authorName");
  const authorEmails = document.getElementsByClassName("authorEmail");

  let valid = true;

  for (let i = 0; i < bookNames.length; i++) {
    const name = bookNames[i].value.trim();
    const price = parseFloat(bookPrices[i].value);
    const authorName = authorNames[i].value.trim();
    const authorEmail = authorEmails[i].value.trim();

    resetErrors(i);

    if (!userNameValidation(name, i)) valid = false;
    if (!validationPrice(price, i)) valid = false;
    if (!authorNameValidation(authorName, i)) valid = false;
    if (!validationEmail(authorEmail, i)) valid = false;
  }

  if (valid) {
    for (let i = 0; i < bookNames.length; i++) {
      const author = new Author(authorNames[i].value, authorEmails[i].value);
      const book = new Book(
        bookNames[i].value,
        parseFloat(bookPrices[i].value),
        author
      );
      books.push(book);
    }

    // call the displayBooks function for show the created table if the condition true
    displayBooks();
    document.getElementById("bookForm").style.display = "none";
    document.getElementById("bookList").style.display = "block";
  }
});

//user name validation
function userNameValidation(name, index) {
  const errorDiv = document.querySelectorAll(".nameError")[index];
  if (name === "") {
    errorDiv.innerHTML = "This field is required.";
    errorDiv.style.display = "block";
    return false;
  } else if (!/^[A-Za-zÀ-ÿ]+([ '-][A-Za-zÀ-ÿ]+)*$/.test(name)) {
    errorDiv.innerHTML = "Please enter a valid name.";
    errorDiv.style.display = "block";
    return false;
  }
  errorDiv.style.display = "none";
  return true;
}

// author name validation
function authorNameValidation(authorName, index) {
  const errorDiv = document.querySelectorAll(".authorNameError")[index];
  if (authorName === "") {
    errorDiv.innerHTML = "This field is required.";
    errorDiv.style.display = "block";
    return false;
  } else if (!/^[A-Za-zÀ-ÿ]+([ '-][A-Za-zÀ-ÿ]+)*$/.test(authorName)) {
    errorDiv.innerHTML = "Please enter a valid author name.";
    errorDiv.style.display = "block";
    return false;
  }
  errorDiv.style.display = "none";
  return true;
}

// email validation
function validationEmail(email, index) {
  const errorDiv = document.querySelectorAll(".emailError")[index];
  if (email === "") {
    errorDiv.innerHTML = "This field is required.";
    errorDiv.style.display = "block";
    return false;
  } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
    errorDiv.innerHTML = "Please enter a valid email.";
    errorDiv.style.display = "block";
    return false;
  }
  errorDiv.style.display = "none";
  return true;
}

// price validation
function validationPrice(price, index) {
  const errorDiv = document.querySelectorAll(".priceError")[index];
  if (isNaN(price) || price <= 0) {
    errorDiv.innerHTML = "Please enter a valid price.";
    errorDiv.style.display = "block";
    return false;
  }
  errorDiv.style.display = "none";
  return true;
}

// validation error
function resetErrors(index) {
  document.querySelectorAll(".nameError")[index].style.display = "none";
  document.querySelectorAll(".priceError")[index].style.display = "none";
  document.querySelectorAll(".authorNameError")[index].style.display = "none";
  document.querySelectorAll(".emailError")[index].style.display = "none";
}

// code book list table

function displayBooks() {
  const tbody = document
    .getElementById("booksTable")
    .getElementsByTagName("tbody")[0];
  tbody.innerHTML = "";
  books.forEach((book, index) => {
    const row = tbody.insertRow();
    row.innerHTML = `
            <td>${book.name}</td>
            <td>${book.price}</td>
            <td>${book.author.name}</td>
            <td>${book.author.email}</td>
            <td>
                <button onclick="editBook(${index})">Edit</button>
                <button onclick="deleteBook(${index})">Delete</button>
            </td>
        `;
  });


  document.getElementById("bookForm").style.display = "none";
  document.getElementById("bookManagement").style.display = "none";
}

//   not finish yet
function editBook(index) {
  const tbody = document
    .getElementById("booksTable")
    .getElementsByTagName("tbody")[0];
  const row = tbody.rows[index];
  const cells = row.cells;

  if (cells[0].isContentEditable) {
    books[index].name = cells[0].innerText;
    books[index].price = parseFloat(cells[1].innerText);
    books[index].author.name = cells[2].innerText;
    books[index].author.email = cells[3].innerText;
    displayBooks();
  } else {
    cells[0].contentEditable = true;
    cells[1].contentEditable = true;
    cells[2].contentEditable = true;
    cells[3].contentEditable = true;
    cells[0].classList.add("editable");
    cells[1].classList.add("editable");
    cells[2].classList.add("editable");
    cells[3].classList.add("editable");
  }
}

// function for deleted the book
function deleteBook(index) {
  books.splice(index, 1);
  displayBooks();
}
