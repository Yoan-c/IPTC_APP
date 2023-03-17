const exifTool = require("../utils/exifTool");

const data = {
  img: "blog-793047_1920.jpg",
  description: "test description",
};
const addMetadata = (description) => {
  return new Promise((resolve, reject) => {
    exifTool
      .updateDescriptionPicture(data.img, description)
      .then((resp) => {
        resolve(description);
      })
      .catch((err) => {
        reject("error");
      });
  });
};

module.exports = addMetadata;
