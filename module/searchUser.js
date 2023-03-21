const signUp = require("../schema/signUp");

module.exports = async (req, res) => {
  try {
    const { searchValue } = req.params;
    const query = searchValue.split(" ");

    const searchUser = await signUp.find({
      $or: [
        { firstName: { $regex: query.length > 1 ? query[0] : searchValue } },
        { lastName: { $regex: query.length > 1 ? query[1] : searchValue } },
      ],
    });
    return res.status(200).json({
      success: true,
      message: "search user successfully",
      userList: searchUser,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
