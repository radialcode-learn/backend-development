const signUp = require("../schema/signUp");

module.exports = async (req, res) => {
  const checkUser = await signUp.find({ email: req.payload.email });
  if (!!checkUser) {
    if (checkUser[0].password === req.body.password) {
      await signUp.findByIdAndUpdate(
        { _id: req.payload._id },
        {
          $set: {
            password: req.body.newPassword,
          },
        },
        {
          new: true,
        }
      );
      return res.status(200).json({
        success: true,
        message: "password updated",
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "Old password is wrong",
      });
    }
  }
};
