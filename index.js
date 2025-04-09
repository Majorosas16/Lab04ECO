const express = require("express");
const path = require("path");
const usersRouter = require("./server/routes/users.routes"); //variable que guarda el export de users.routes

const app = express();

app.use(express.json());
app.use("/app1", express.static(path.join(__dirname, "app1")));
app.use("/app2", express.static(path.join(__dirname, "app2")));

let post = [];

app.use("/", usersRouter);

app.get("/post", (req, res) => {
  res.json(post);
});

app.post("/create-post", (req, res) => {
  const { url, title, bio } = req.body;

  if (!title || !bio) {
    return res.status(400).json({ message: "Ops, faltan datos",});
  }

  const newPost = { url, title, bio };
  console.log("Super el registro:", newPost);

  post.push(newPost);
  res.json({ message: "Post registrado" });
});

app.listen(5020);
console.log("Server on: http://localhost:5020");