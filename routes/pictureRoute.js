const express = require("express");
const router = express.Router();
const pictureController = require("../controllers/pictureController");

router.route("/").get(pictureController.getAll);
router
  .route("/:id")
  .patch(pictureController.patchPictureMeta)
  .delete(pictureController.deletePictureMeta);
module.exports = router;
