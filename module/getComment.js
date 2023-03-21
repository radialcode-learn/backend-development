const comment = require("../schema/comment");

module.exports = async (req, res) => {
  try {
    const myPostCommentList = await comment.find({
      postOd: req.params.commentId,
    });
    return res.status(200).json({
      success: true,
      message: "my post comment list",
      commentList: myPostCommentList,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
