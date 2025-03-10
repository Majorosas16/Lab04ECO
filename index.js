const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());
app.use("/app1", express.static(path.join(__dirname, "app1")));
app.use("/app2", express.static(path.join(__dirname, "app2")));

let users = [];

app.get("/users", (req, res) => {
  res.json(users);
});

app.post("/user-register", (req, res) => {

  const { user, name, password } = req.body;

  if (!user || !name || !password) {
    return res.status(400).json({ message: "Ops, faltan datos" });
  }


  const newUser = { user, name, password };
  console.log("Super el registro:", newUser);

  users.push(newUser);
  res.json({ message: "Usuario registrado" });
});

app.post("/user-login", (req, res) => {
  const { user, password } = req.body;

  if (!user || !password) {
    return res.status(400).json({ message: "Ops, faltan datos", success: false });
  }

  const foundUser = users.find(u => u.user === user && u.password === password);

  if (!foundUser) {
    return res.status(401).json({ message: "Usuario no existe o contraseña incorrecta", success: false });
  }

  console.log("Inicio de sesión exitoso:", foundUser);
  res.json({ message: "Inicio de sesión exitoso", success: true });
});

app.listen(5020);