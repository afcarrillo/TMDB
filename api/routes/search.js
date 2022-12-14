const express = require("express");
const SearchController = require("../controllers/search");

const router = express.Router();

router.get("/:query", SearchController.search);

module.exports = router;
