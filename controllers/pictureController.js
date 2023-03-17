const exifTool = require("../utils/exifTool");
const resError = require("../utils/errorSend");
const fs = require("fs");

exports.getAll = (req, res, next) => {
  fs.readdir(`${__dirname}/../data`, (err, files) => {
    if (err)
      return resError.errorSend(
        res,
        500,
        "Une erreur est survenue sur le serveur"
      );
    let tabPromise = [];
    let tabfile = files;
    let tabData = [];
    files.forEach((file) => {
      tabPromise.push(exifTool.readDescriptionPicture(file));
    });
    Promise.all(tabPromise)
      .then((values) => {
        tabData.description = [...values];
        tabData.files = tabfile;
        res.status(200).json({
          status: "success",
          description: tabData.description,
          files: tabData.files,
        });
      })
      .catch((err) =>
        resError.errorSend(res, 500, "Une erreur est survenue sur le serveur")
      );
  });
};

exports.patchPictureMeta = (req, res, next) => {
  const img = req.params.id;
  const { description } = req.body;

  if (!img || !description)
    return resError.errorSend(
      res,
      400,
      "Veuillez verifier le champ description"
    );
  exifTool
    .updateDescriptionPicture(img, description)
    .then((resp) => {
      res.status(200).json({
        status: "success",
        message: img,
        description,
      });
    })
    .catch((err) => {
      return resError.errorSend(
        res,
        500,
        "Une erreur s'est produite, veuillez réessayer ultérieurement"
      );
    });
};
exports.deletePictureMeta = (req, res, next) => {
  const img = req.params.id;
  if (!img) return resError.errorSend(res, 400, "Veuillez indiquer une image");

  exifTool
    .deleteDescriptionPicture(img)
    .then((resp) => {
      res.status(200).json({
        status: "success",
      });
    })
    .catch((err) => {
      return resError.errorSend(
        res,
        500,
        "Une erreur s'est produite, veuillez réessayer ultérieurement"
      );
    });
};
