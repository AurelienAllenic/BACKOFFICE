const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");

const experienceCtrl = require("../controllers/experience");

router.post("/", auth, multer, experienceCtrl.create);
router.put("/:id", auth, multer, experienceCtrl.update);
router.delete("/:id", auth, experienceCtrl.delete);
router.get("/:id", auth, experienceCtrl.findOne);
router.use("/", auth, experienceCtrl.findAll);

module.exports = router;
