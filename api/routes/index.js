const express = require("express");
const { User, Favorite } = require("../models");
const { generateToken } = require("../config/tokens");
const validateAuth = require("../middleware/auth");

const userRoutes = require("./user");
const movieRoutes = require("./movie");
const tvRoutes = require("./tv");
const searchRoutes = require("./search");
const favoritesRoutes = require("./favorites");

const router = express.Router();

router.use("/user", userRoutes);
router.use("/movie", movieRoutes);
router.use("/tv", tvRoutes);
router.use("/search", searchRoutes);
router.use("/favorites", favoritesRoutes);

router.post("/signup", (req, res, next) => {
  User.findOne({ where: { email: req.body.email } }).then((user) => {
    return user
      ? res.sendStatus(403)
      : User.create(req.body)
          .then((user) => res.sendStatus(201))
          .catch((err) => res.send(err));
  });
});

router.post("/login", (req, res, next) => {
  const { email, password } = req.body;
  User.findOne({ where: { email }, include: Favorite }).then((user) => {
    if (!user) return res.sendStatus(404);
    user.validatePassword(password).then((isValid) => {
      if (!isValid) return res.sendStatus(401);
      const payload = {
        email: user.email,
        fullname: user.fullname,
        nickname: user.nickname,
        createdAt: user.createdAt,
      };
      const token = generateToken(payload);
      res.cookie("token", token);
      res.send(payload);
    });
  });
});

router.get("/me", validateAuth, (req, res) => {
  res.send(req.user);
});

router.post("/logout", (req, res) => {
  res.clearCookie("token");
  res.sendStatus(204);
});

module.exports = router;
