const createPost = require("../schema/simplePost");

const CreatePostApiHandler = async (req, res) => {
  const myPostList = await createPost.find({ userId: req.payload._id });
  return res.status(200).json({
    success: true,
    message: "my post list",
    postList: myPostList,
  });
};

const DeletePostApiHandler = async (req, res) => {
  console.log(req.params.postId, "yyyyyyyyyy");
  const myPostList = await createPost.deleteOne({ _id: req.params.postId });

  return res.status(200).json({
    success: true,
    message: "my post list deleted successfully",
    postList: myPostList,
  });
};

module.exports = {
  CreatePostApiHandler,
  DeletePostApiHandler,
};
