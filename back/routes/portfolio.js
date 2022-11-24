const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");

const portfolioCtrl = require("../controllers/portfolio");

router.post("/", auth, multer, portfolioCtrl.create);
router.put("/:id", auth, multer, portfolioCtrl.update);
router.delete("/:id", auth, portfolioCtrl.delete);
router.get("/:id", auth, portfolioCtrl.findOne);
router.use("/", auth, portfolioCtrl.findAll);

module.exports = router;
