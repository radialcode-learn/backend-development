const { ImageUrl } = require("../comman/UploadImageUrl");
const signUp = require("../schema/signUp");

module.exports = async (req, res) => {
  try {
    const image_url = ImageUrl(req.body.filePath);
    const updateMe = await signUp.findByIdAndUpdate(
      { _id: req.parasm._id },
      {
        $set: {
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          phone: req.body.phone,
          city: req.body.city,
          country: req.body.country,
          filePath: req.body.filePath,
          profileImage: image_url.file_path,
        },
      },
      {
        new: true,
      }
    );
    return res.status(200).json({
      success: true,
      message: "user update successfully",
      userDetails: updateMe,
    });
  } catch (err) {
    console.log(err);
  }
};
