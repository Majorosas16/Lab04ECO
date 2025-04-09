const { getPostFromDb, createPostFromDb } = require("../db/post.db");

const getPosts = async (req, res) => {
    const post = getPostFromDb();
    res.json(post);
};

const createPost = async (req, res) => {
    const { url, title, bio } = req.body;
  
    if (!title || !bio) {
      return res.status(400).json({ message: "Ops, faltan datos",});
    }
  
    const newPost = { url, title, bio };
    console.log("Super el registro:", newPost);
  
    createPostFromDb(newPost);
    res.json({ message: "Post registrado" });
};
  
module.exports = {
    getPosts,
    createPost
}