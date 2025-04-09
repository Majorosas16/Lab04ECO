const { getUsersFromDb, createUserFromDb } = require("../db/users.db");

const getUsers = async (req, res) => {
  const users = getUsersFromDb();
  res.json(users);
};

const createUser = async (req, res) => {
  const { avatar, user, name, password } = req.body;

  if (!user || !name || !password) {
    return res.status(400).json({ message: "Ops, faltan datos" });
  }

  const newUser = { avatar, user, name, password };
  console.log("Super el registro:", newUser);

  createUserFromDb(newUser);
  res.json({ message: "Usuario registrado" });
};

const loginUser = async (req, res) => {
  const { user, password } = req.body;

  if (!user || !password) {
    return res
      .status(400)
      .json({ message: "Ops, faltan datos", success: false });
  }

  const foundUser = getUsersFromDb().find(
    (u) => u.user === user && u.password === password
  );

  if (!foundUser) {
    return res.status(401).json({
      message: "Usuario no existe o contraseña incorrecta",
      success: false,
    });
  }

  console.log("Inicio de sesión exitoso:", foundUser);
  res.json({ message: "Inicio de sesión exitoso", success: true });
};

module.exports = {
  getUsers,
  createUser,
  loginUser,
};
