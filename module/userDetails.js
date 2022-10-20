const signUp = require("../schema/signUp");

module.exports = async (req, res) => {
  try {
    const updateMe = await signUp.findOne({ email: req.payload.email });
    return res.status(200).json({
      success: true,
      message: "user details",
      userDetails: updateMe,
    });
  } catch {
    return res.status(500).json({
      success: false,
      message: "Token Not found",
    });
  }
};
