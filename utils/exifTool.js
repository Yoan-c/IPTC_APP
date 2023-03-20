const { unlink } = require("fs/promises");
const exiftool = require("exiftool-vendored").exiftool;

exports.updateDescriptionPicture = (img, Description) => {
  return new Promise((resolve, reject) => {
    if (Description === " ") {
      return resolve("success");
    }
    exiftool
      .write(`${__dirname}/../data/${img}`, {
        Description,
      })
      .then((res) => {
        unlink(`${__dirname}/../data/${img}_original`)
          .then((data) => resolve("success"))
          .catch((err) => reject(err));
      })
      .catch((err) => reject(err));
  });
};

exports.readDescriptionPicture = (img) => {
  return new Promise((resolve, reject) => {
    exiftool
      .read(`${__dirname}/../data/${img}`)
      .then((tags) => resolve(tags.Description))
      .catch((err) => reject("Une erreur est survenu: ", err));
  });
};

exports.deleteDescriptionPicture = (img) => {
  return new Promise((resolve, reject) => {
    exiftool
      .read(`${__dirname}/../data/${img}`)
      .then((tags) => {
        if (tags.Description) {
          exiftool
            .write(`${__dirname}/../data/${img}`, {
              Description: null,
            })
            .then((res) => {
              unlink(`${__dirname}/../data/${img}_original`)
                .then((data) => resolve("success"))
                .catch((err) => reject(err));
            })
            .catch((err) => reject(err));
        } else resolve("success");
      })
      .catch((err) => reject(err));
  });
};
