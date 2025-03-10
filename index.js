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

app.listen(5020);

// // POST: Registro de por medio del input
// app.post("/register", (req, res) => {
//   const { name } = req.body;
//   if (!name) { //Verifica que antes de darle al btn registrar haya un nombre
//     return res.status(400).json({ message: "Ops, el nombre es obligatorio" });
//   }
// //objects.keys() devuelve un array de keys en las propiedades de "players  "
//   if (Object.keys(players).length >= 2) {
//     return res.status(400).json({ message: "Ops, solo 2 jugadores" });
//   }

//   players[name] = null; //Este jugador se ha registrado, pero aún no sabemos qué jugada ha elegido
//   console.log("Jugadores registrados:", players);

//   res.json({ message: `¡Jugador ${name} registrado!`, players: Object.keys(players) });

//   // Cuando hay 2 jugadores, comienza el temporizador o la function startCountdown()
//   if (Object.keys(players).length === 2) {
//     countdown();
//   }
// });