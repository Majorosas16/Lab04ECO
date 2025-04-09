const express = require("express");
const router = express.Router(); // Intancia de express que ayuda a definir las rutas en una parte e importarlas en otra
const { getUsers, createUser, loginUser } = require("../controllers/users.controllers");

router.get("/users", getUsers);
router.post("/user-register", createUser);
router.post("/user-login", loginUser);

module.exports = router; //exporto lo que acabo de definir en la linea 2
