const { ImageUrl } = require("../comman/UploadImageUrl");

module.exports = async (req, res) => {
  const { file } = req.body;
  const image_data = ImageUrl(file);
  return res.json({
    success: true,
    filename: image_data.file_path,
    is_file_exist: image_data.is_file_exist,
  });
};
