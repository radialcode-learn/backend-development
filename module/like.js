const likePost = require("../schema/likePost");
const mongoose = require("mongoose");
const dislikePost = require("../schema/dislikePost");

const findLike = async (req, res, next) => {
  try {
    console.log(req.payload);
    const like = await likePost.findOne({
      postId: req.body.postId,
      userId: req.payload._id,
    });
    console.log(like);
    if (like === null) {
      next();
    } else {
      return res.status(400).json({
        success: false,
        message: "Post already liked",
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const findDisLike = async (req, res, next) => {
  try {
    const disLike = await dislikePost.findOne({
      postId: mongoose.Types.ObjectId(req.body.postId),
      userId: mongoose.Types.ObjectId(req.payload._id),
    });
    if (disLike === null) {
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

const createLike = async (req, res, next) => {
  try {
    req.body.userId = req.payload._id;
    const newDisLike = await likePost.create(req.body);
    return res.status(201).json({
      success: true,
      message: "post liked successfully",
      dislike: newDisLike,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = [findLike, findDisLike, createLike];
