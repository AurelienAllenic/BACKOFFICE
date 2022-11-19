const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");

const portfolioCtrl = require("../controllers/portfolio");

router.post("/portfolio", auth, multer, portfolioCtrl.create);
router.put("/portfolio/:id", auth, multer, portfolioCtrl.update);
router.delete("/portfolio/:id", auth, portfolioCtrl.delete);
router.get("/portfolio/:id", auth, portfolioCtrl.findOne);
router.use("/portfolio", auth, portfolioCtrl.findAll);

module.exports = router;
