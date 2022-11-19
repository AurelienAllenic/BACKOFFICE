const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");

const BiolCtrl = require("../controllers/bio");

router.post("/bio", auth, multer, BiolCtrl.create);
router.put("/bio/:id", auth, multer, BiolCtrl.update);
router.delete("/bio/:id", auth, BiolCtrl.delete);
router.get("/bio/:id", auth, BiolCtrl.findOne);
router.use("/bio", auth, BiolCtrl.findAll);

module.exports = router;
