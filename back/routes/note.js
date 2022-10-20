const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");

const noteCtrl = require("../controllers/note");

router.post("/", auth, multer, noteCtrl.create);
router.put("/:id", auth, multer, noteCtrl.update);
router.delete("/:id", auth, noteCtrl.delete);
router.get("/:id", auth, noteCtrl.findOne);
router.use("/", auth, noteCtrl.findAll);

module.exports = router;
