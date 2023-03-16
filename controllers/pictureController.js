const exifTool = require("../utils/exifTool");
const resError = require("../utils/errorSend");

exports.getAll = (req, res, next) => {
  exifTool.readDescriptionPicture("blog-2355684_1280.jpg");
  res.status(200).json({
    status: "success",
    message: "ok",
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
      console.log(err);
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
      console.log(err);
      return resError.errorSend(
        res,
        500,
        "Une erreur s'est produite, veuillez réessayer ultérieurement"
      );
    });
};
