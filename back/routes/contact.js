const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");

const contactCtrl = require("../controllers/contact");

router.post("/", auth, multer, contactCtrl.create);
router.put("/:id", auth, multer, contactCtrl.update);
router.delete("/:id", auth, contactCtrl.delete);
router.get("/:id", auth, contactCtrl.findOne);
router.use("/", auth, contactCtrl.findAll);

module.exports = router;
