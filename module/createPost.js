const { ImageUrl } = require("../comman/UploadImageUrl");
const simplePost = require("../schema/simplePost");
const signUp = require("../schema/signUp");

module.exports = async (req, res) => {
  const image_url = ImageUrl(req.body.filePath);
  const userDetails = await signUp.find({ _id: req.payload._id });
  console.log(userDetails, "userDetails");
  const createPostDeatils = new simplePost({
    description: req.body.description,
    title: req.body.title,
    filePath: req.body.filePath,
    file: image_url.file_path,
    like: 0,
    dislike: 0,
    total_comment: 0,
    user: userDetails[0],
    userId: req.payload._id,
  });

  const createPostDeatilsSave = await createPostDeatils.save();
  return res.status(200).json({
    success: true,
    message: "Post Created successfully",
    createPost: createPostDeatilsSave,
  });
};
