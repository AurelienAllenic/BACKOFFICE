const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");

const BiolCtrl = require("../controllers/bio");

router.post("/", auth, multer, BiolCtrl.create);
router.put("/:id", auth, multer, BiolCtrl.update);
router.delete("/:id", auth, BiolCtrl.delete);
router.get("/:id", auth, BiolCtrl.findOne);
router.use("/", auth, BiolCtrl.findAll);

module.exports = router;
