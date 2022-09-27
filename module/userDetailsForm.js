const userDetailsForm = require("../schema/userDetailsForm");

module.exports = async (req, res) => {
  const checkUserValidation = await userDetailsForm.find({
    email: req.body.email,
    userId: req.body.userId,
  });
  console.log("checkUserValidation", checkUserValidation);
  if (checkUserValidation.length === 0) {
    const userDetailsSaveData = new userDetailsForm({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      phone: req.body.phone,
      address: req.body.address,
      city: req.body.city,
      country: req.body.country,
      zipCode: req.body.zipCode,
      userId: req.body.userId,
    });
    const userDetailsSave = await userDetailsSaveData.save();
    return res.status(200).json({
      success: true,
      message: "data submit successfully",
      userDetails: userDetailsSave,
    });
  } else {
    return res.status(400).json({
      success: true,
      message: "user already exist",
    });
  }
};
