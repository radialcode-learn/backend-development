const signUp = require("../schema/signUp");

module.exports = async (req, res) => {
  const allUserDetails = await signUp.find({});
  return res.status(200).json({
    success: true,
    message: "all user details",
    allUserDetails: allUserDetails,
  });
};
