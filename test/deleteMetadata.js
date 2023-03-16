const exifTool = require("../utils/exifTool");

const data = {
  img: "blog-793047_1920.jpg",
};
const deleteMetadata = () => {
  return new Promise((resolve, reject) => {
    exifTool
      .deleteDescriptionPicture(data.img)
      .then((resp) => {
        resolve("success");
      })
      .catch((err) => {
        reject("error");
      });
  });
};

module.exports = deleteMetadata;
