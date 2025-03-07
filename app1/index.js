document.getElementById("register-div").style.display = "none";
document.getElementById("login-div").style.display = "none";
document.getElementById("post-div").style.display = "none";

function getUsers() {
  fetch("http://localhost:5050/users")
    .then((response) => response.json())
    .then((data) => console.log("get response", data))
    .catch((error) => console.error("Error:", error));
}
