const express = require("express");
const MovieController = require("../controllers/movie");

const router = express.Router();

router.get("/", MovieController.getPopular);
router.get("/:id", MovieController.getMovie);

module.exports = router;
