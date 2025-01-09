var loader = document.getElementsByClassName("loader")[0];
var errorDisplay = document.getElementsByClassName("error")[0];

function getUsers() {
  loader.style.display = "block";
  errorDisplay.style.display = "none";

  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((users) => {
      displayUsers(users);
    })
    .catch((error) => {
      console.error("Fetch error: ", error);
      errorDisplay.style.display = "block";
    })
    .finally(() => {
      loader.style.display = "none";
    });
}

getUsers();

function displayUsers(users) {
  const showBtns = document.querySelector(".show-Btns");
  showBtns.innerHTML = "";

  users.forEach((user) => {
    const btn = document.createElement("button");
    btn.classList.add("btn");
    btn.textContent = user.name;
    btn.addEventListener("click", () => {
      loader.style.display = "block";
      setTimeout(() => {
        displayUserData(user);
      }, 1000);
    });
    showBtns.appendChild(btn);
  });
}

async function displayUserData(user) {
  const showData = document.querySelector(".show-data");
  showData.innerHTML = "";
  loader.style.display = "none";

  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${user.id}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const userData = await response.json();

    const div = document.createElement("div");
    div.classList.add("divs");
    div.innerHTML = `
            <h2>Name: ${userData.name}</h2>
            <p>Email: ${userData.email}</p>
            <p>Phone: ${userData.phone}</p>
            <p>Website: ${userData.website}</p>
            <p>Company: ${userData.company.name}</p>
        `;
    showData.appendChild(div);
  } catch (error) {
    console.error("Fetch error: ", error);
    errorDisplay.style.display = "block";
  }
}
