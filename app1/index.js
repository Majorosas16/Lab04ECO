document.getElementById("registerBtn").addEventListener("click", registroUsuarios);

const userInput = document.getElementById("user-input")
const nameInput = document.getElementById("name-input")
const passwordInput = document.getElementById("password-input")

// document.getElementById("register-div").style.display = "none";
document.getElementById("login-div").style.display = "none";
document.getElementById("post-div").style.display = "none";

function registroUsuarios(){
  fetch("http://localhost:5020/user-register", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({ 
      user: userInput.value, 
      name: nameInput.value,
      password: passwordInput.value }) 
  })
    .then((response) => response.json())
    .then((data) => console.log("post response", data))
    .catch((error) => console.error("Error:", error));
}
