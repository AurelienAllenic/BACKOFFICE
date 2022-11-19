const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");

const accueilCtrl = require("../controllers/accueil");

router.post("/accueil", auth, multer, accueilCtrl.create);
router.put("/accueil/:id", auth, multer, accueilCtrl.update);
router.delete("/accueil/:id", auth, accueilCtrl.delete);
router.get("/accueil/:id", auth, accueilCtrl.findOne);
router.use("/accueil", auth, accueilCtrl.findAll);

module.exports = router;
