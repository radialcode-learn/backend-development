const createPost = require("../schema/simplePost");

module.exports = async (req, res) => {
  const myPostList = await createPost.find({ userId: req.payload._id });
  return res.status(200).json({
    success: true,
    message: "my post list",
    postList: myPostList,
  });
};
