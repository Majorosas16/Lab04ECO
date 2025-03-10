document
  .getElementById("registerBtn")
  .addEventListener("click", registroUsuarios);
document.getElementById("login-btn").addEventListener("click", loginUsuarios);

const secciones = ["home", "register-div", "login-div", "post-div"];

function showScreen(idScreen) {
  secciones.forEach((id) => {
    document.getElementById(id).style.display =
      id === idScreen ? "block" : "none";
  });
}

// Se ejecuta cuando la página carga
document.addEventListener("DOMContentLoaded", function () {
  showScreen("home"); // Mostrar home por defecto

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

const userInput = document.getElementById("user-input");
const nameInput = document.getElementById("name-input");
const passwordInput = document.getElementById("password-input");

function registroUsuarios() {
  fetch("http://localhost:5020/user-register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
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

function loginUsuarios() {
  fetch("http://localhost:5020/user-login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      user: userInput.value,
      password: passwordInput.value,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Respuesta del servidor:", data); // Para depuración

      if (data.success) {
        alert(data.message); // Primero muestra el alert
        showScreen("post-div"); // Luego redirige
      } else {
        alert(data.message); // Si falla el login, muestra error
      }
    })
    .catch((error) => console.error("Error:", error));
}

