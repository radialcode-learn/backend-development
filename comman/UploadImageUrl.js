const path = require("path");
const fs = require("fs");
const config = require("config");

function ImageUrl(file) {
  const file_path = `${config.imageUrl}/${file}`;
  console.log(path, "path");
  console.log(config.imageUrl, "config.imageUrl");
  const is_file_exist = fs.existsSync(config.fileUrl + "/" + file);
  return { file_path, is_file_exist };
}

module.exports = {
  ImageUrl,
};
