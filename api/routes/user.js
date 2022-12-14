const express = require("express");
const validateAuth = require("../middleware/auth");
const UserController = require("../controllers/user");

const router = express.Router();

router.get("/", validateAuth, UserController.getAll);
router.get("/:nickname", validateAuth, UserController.getUser);

module.exports = router;
