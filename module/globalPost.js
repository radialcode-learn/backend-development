const { findOne } = require("../schema/simplePost");
const createPost = require("../schema/simplePost");

module.exports = async (req, res) => {
  const globalPostList = await createPost.find();
  return res.status(200).json({
    success: true,
    message: "my post list",
    globalPostList: globalPostList,
  });
};
