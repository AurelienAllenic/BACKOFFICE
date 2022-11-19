const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");

const contactCtrl = require("../controllers/contact");

router.post("/contact", auth, multer, contactCtrl.create);
router.put("/contact/:id", auth, multer, contactCtrl.update);
router.delete("/contact/:id", auth, contactCtrl.delete);
router.get("/contact/:id", auth, contactCtrl.findOne);
router.use("/contact", auth, contactCtrl.findAll);

module.exports = router;
