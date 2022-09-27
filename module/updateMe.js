const signUp = require("../schema/signUp");

module.exports = async (req, res) => {
  try {
    const updateMe = await signUp.findByIdAndUpdate(
      { _id: req.payload._id },
      {
        $set: {
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          phone: req.body.phone,
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
