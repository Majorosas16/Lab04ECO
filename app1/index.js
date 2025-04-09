document.getElementById("registerBtn").addEventListener("click", userRegister);
document.getElementById("loginBtn").addEventListener("click", userLogin);
document.getElementById("create").addEventListener("click", createPost);

const avatarInput = document.getElementById("avatar-image");
const userInput = document.getElementById("user-input");
const userLoginInput = document.getElementById("userLogin-input");
const nameInput = document.getElementById("name-input");
const passwordInput = document.getElementById("password-input");
const passwordLoginInput = document.getElementById("passwordLogin-input");
const urlImage = document.getElementById("url-image");
const titleImage = document.getElementById("title-input");
const bio = document.getElementById("bio-input");

// Code for none and block display
const sections = ["home", "register-div", "login-div", "post-div"];

function showScreen(idScreen) {
  sections.forEach((id) => {
    document.getElementById(id).style.display =
      id === idScreen ? "block" : "none";
  });
}

document.addEventListener("DOMContentLoaded", function () {
  showScreen("home");

  document
    .getElementById("register-btn")
    .addEventListener("click", () => showScreen("register-div"));
  document
    .getElementById("login-btn")
    .addEventListener("click", () => showScreen("login-div"));
  document
    .querySelector(".backHome1")
    .addEventListener("click", () => showScreen("home"));
  document
    .querySelector(".backHome2")
    .addEventListener("click", () => showScreen("home"));
  document
    .querySelector(".backHome3")
    .addEventListener("click", () => showScreen("home"));
});

function userRegister() {
  fetch("http://localhost:5020/user-register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      avatar: avatarInput.value,
      user: userInput.value,
      name: nameInput.value,
      password: passwordInput.value,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      alert(data.message);
      showScreen("home");
    })
    .catch((error) => console.error("Error:", error));
}

function userLogin() {
  
  fetch("http://localhost:5020/user-login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      user: userLoginInput.value,
      password: passwordLoginInput.value,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Respuesta del servidor:", data); // Para depuración

      if (data.success) {
        alert(data.message);
        showScreen("post-div"); // Luego redirige
      } else {
        alert(data.message); // Si falla el login, muestra error
      }
    })
    .catch((error) => console.error("Error:", error));
}

function createPost() {
  fetch("http://localhost:5020/create-post", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      url: urlImage.value,
      title: titleImage.value,
      bio: bio.value
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Respuesta del servidor:", data); 

      if (data) {
        alert(data.message);
      } else {
        alert(data.message);
      }
    })
    .catch((error) => console.error("Error:", error));
}

