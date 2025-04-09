//Manipulación, mi data y modificación de mis datos tiene que estar aquí
let users = [];

const getUsersFromDb = () => {
  return users;
};

const createUserFromDb = (user) => {
  users.push(user);
  return users;
};

module.exports = {
  getUsersFromDb,
  createUserFromDb,
};
