const express = require("express");
const validateAuth = require("../middleware/auth");
const FavoritesController = require("../controllers/favorites");

const router = express.Router();

router.get("/", validateAuth, FavoritesController.getAll);
/* router.get("/:id", validateAuth, FavoritesController.getOne); */
router.post("/add/:type/:id", validateAuth, FavoritesController.addTo);
router.delete("/remove/:id", validateAuth, FavoritesController.removeFrom);

module.exports = router;
