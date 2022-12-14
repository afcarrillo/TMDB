// const axios = require("axios");
const { User, Favorite } = require("../models");

function FavoritesController() {}

FavoritesController.getAll = (req, res) => {
  User.findOne({ where: { email: req.user.email } }).then((user) => {
    if (!user) return res.sendStatus(404);
    return Favorite.findAll({ where: { userId: user.id } })
      .then((favorites) => res.send(favorites))
      .catch((err) => res.send(err));
  });
};

/* FavoritesController.getOne = (req, res) => {
  User.findOne({ where: { email: req.user.email } }).then((user) => {
    if (!user) return res.sendStatus(404);
    return Favorite.findOne({ where: { id: req.params.id } })
      .then((favorite) => {
        if (!favorite) return res.sendStatus(404);
        return res.send(favorite);
      })
      .catch((err) => res.send(err));
  });
}; */

FavoritesController.addTo = (req, res) => {
  User.findOne({ where: { email: req.user.email } }).then((user) => {
    if (!user) return res.sendStatus(404);
    const media = {
      media_id: req.params.id,
      media_type: req.params.type,
      name: req.body.name,
      poster_path: req.body.poster,
      userId: user.id,
    };
    return Favorite.create(media)
      .then((newFavorite) => res.send(newFavorite))
      .catch((err) => res.send(err));
  });
};

FavoritesController.removeFrom = (req, res) => {
  User.findOne({ where: { email: req.user.email } }).then((user) => {
    if (!user) return res.sendStatus(404);
    return Favorite.destroy({ where: { id: req.params.id } })
      .then(() => res.sendStatus(202))
      .catch((err) => res.send(err));
  });
};

module.exports = FavoritesController;
