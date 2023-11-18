const signUp = require("../schema/signUp");
const mongoose = require("mongoose");

module.exports = async (req, res) => {
  const allUserDetails = await signUp.find({
    email: { $nin: [req.payload.email] },
  });
  return res.status(200).json({
    success: true,
    message: "all user details",
    allUserDetails: allUserDetails,
  });
};
