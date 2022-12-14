const express = require("express");
const TvController = require("../controllers/tv");

const router = express.Router();

router.get("/", TvController.getPopular);
router.get("/:id", TvController.getTv);

module.exports = router;
