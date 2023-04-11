const signUp = require("../schema/signUp");
const mongoose = require("mongoose");

module.exports = async (req, res) => {
  // console.log(req.query, "aaaaaaaaaaa");
  const allUserDetails = await signUp.find({});
  // const page = Number(req.query.page) || 1;
  // const limit = Number(req.query.limit) || 2;
  // var skipData = (page - 1) * limit;
  // const allUserDetailsData = allUserDetails.skip(skipData).limit(limit);
  // console.log(allUserDetailsData, "allUserDetails");
  return res.status(200).json({
    success: true,
    message: "all user details",
    allUserDetails: allUserDetails,
  });
};
