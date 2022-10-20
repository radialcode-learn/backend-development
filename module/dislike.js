const dislikePost = require("../schema/dislikePost");
const likePost = require("../schema/likePost");
const mongoose = require("mongoose");

const findDisLike = async (req, res, next) => {
  try {
    console.log(req.payload);
    const dislike = await dislikePost.findOne({
      postId: req.body.postId,
      userId: req.payload._id,
    });
    console.log(dislike);
    if (dislike === null) {
      next();
    } else {
      return res.status(400).json({
        success: false,
        message: "Post already disliked",
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const findLike = async (req, res, next) => {
  try {
    const like = await likePost.findOne({
      postId: mongoose.Types.ObjectId(req.body.postId),
      userId: mongoose.Types.ObjectId(req.payload._id),
    });
    if (like === null) {
      next();
    } else {
      await likePost.deleteOne({
        postId: mongoose.Types.ObjectId(req.body.postId),
        userId: mongoose.Types.ObjectId(req.payload._id),
      });
      next();
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const createDislike = async (req, res, next) => {
  try {
    req.body.userId = req.payload._id;
    const newDisLike = await dislikePost.create(req.body);
    return res.status(201).json({
      success: true,
      message: "post disliked successfully",
      dislike: newDisLike,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = [findDisLike, findLike, createDislike];
