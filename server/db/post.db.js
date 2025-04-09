let post = [];

const getPostFromDb = () => {
  return post;
};

const createPostFromDb = (user) => {
  post.push(user);
  return post;
};

module.exports = {
  getPostFromDb,
  createPostFromDb,
};
