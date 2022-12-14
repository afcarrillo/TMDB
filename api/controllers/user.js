//const axios = require("axios");
const { Op } = require("sequelize");
const { User } = require("../models");
const { Favorite } = require("../models");

function UserController() {}

UserController.getAll = (req, res) => {
  User.findAll({
    where: { email: { [Op.ne]: req.user.email } },
  })
    .then((user) => res.send(user))
    .catch((err) => res.status(404).send(err));
};

UserController.getUser = (req, res) => {
  return req.user.nickname === req.params.nickname
    ? User.findOne({
        where: { email: req.user.email },
        include: Favorite,
      })
        .then((user) => res.send(user))
        .catch((err) => res.status(404).send(err))
    : res.sendStatus(404);
};

module.exports = UserController;
