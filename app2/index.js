document.getElementById("usersList-btn").addEventListener("click",);
document.getElementById("postList-btn").addEventListener("click",);
const userList_div = document.getElementById("usersList");
const postList_div = document.getElementById("postList");

function getUsers() {
  fetch("http://localhost:5050/users")
    .then((response) => response.json())
    .then((data) => console.log("get response", data))
    .catch((error) => console.error("Error:", error));
}
