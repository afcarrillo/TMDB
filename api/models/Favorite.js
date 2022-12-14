const S = require("sequelize");
const db = require("../config/db");

class Favorite extends S.Model {}

Favorite.init(
  {
    media_id: {
      type: S.INTEGER,
    },
    media_type: {
      type: S.STRING,
    },
    name: {
      type: S.STRING,
    },
    poster_path: {
      type: S.STRING,
    },
  },
  { sequelize: db, modelName: "favorite" }
);

module.exports = Favorite;
