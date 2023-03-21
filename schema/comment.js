const mongoose = require("mongoose");

const comment = mongoose.Schema(
  {
    postId: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
      ref: "simplePost",
    },
    comment: { type: String, required: true },
  },
  { timestamps: true }
);
module.exports = mongoose.model("comment", comment);
