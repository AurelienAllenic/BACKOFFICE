const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");

const accueilCtrl = require("../controllers/accueil");

router.post("/", auth, multer, accueilCtrl.create);
router.put("/:id", auth, multer, accueilCtrl.update);
router.delete("/:id", auth, accueilCtrl.delete);
router.get("/:id", auth, accueilCtrl.findOne);
router.use("/", auth, accueilCtrl.findAll);

module.exports = router;
