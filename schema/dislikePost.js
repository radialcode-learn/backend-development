const mongoose = require("mongoose");

const dislikePost = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
      ref: "signUp",
    },
    postId: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
      ref: "simplePost",
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("dislikePost", dislikePost);
