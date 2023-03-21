const comment = require("../schema/comment");
const signUp = require("../schema/signUp");

module.exports = async (req, res) => {
  try {
    const userDetails = await signUp.find({ _id: req.payload._id });
    const createComment = new comment({
      comment: req.body.comment,
      postId: req.body.postId,
      user: userDetails[0],
      userId: req.payload._id,
    });

    const createCommentSave = await createComment.save();
    return res.status(200).json({
      success: true,
      message: "comment Created successfully",
      createPost: createCommentSave,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
