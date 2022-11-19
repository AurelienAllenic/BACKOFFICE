const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");

const experienceCtrl = require("../controllers/experience");

router.post("/experience", auth, multer, experienceCtrl.create);
router.put("/experience/:id", auth, multer, experienceCtrl.update);
router.delete("/experience/:id", auth, experienceCtrl.delete);
router.get("/experience/:id", auth, experienceCtrl.findOne);
router.use("/experience", auth, experienceCtrl.findAll);

module.exports = router;
