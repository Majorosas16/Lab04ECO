const express = require("express");
const router = express.Router();
const { getPosts, createPost } = require("../controllers/posts.controllers");

router.get("/post", getPosts);
router.post("/create-post", createPost);

module.exports = router;
