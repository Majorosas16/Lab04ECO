const express = require("express");
const path = require("path");
const usersRoutes = require("./server/routes/users.routes"); //variable que guarda el export de users.routes
const postsRoutes = require("./server/routes/posts.routes");

const app = express();

app.use(express.json());
app.use("/app1", express.static(path.join(__dirname, "app1")));
app.use("/app2", express.static(path.join(__dirname, "app2")));

app.use("/", usersRoutes);
app.use("/", postsRoutes);

app.listen(5020);
console.log("Server on: http://localhost:5020");