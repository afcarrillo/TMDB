const User = require("./User");
const Favorite = require("./Favorite");

User.hasMany(Favorite);
Favorite.belongsTo(User, { as: "user" });

module.exports = { User, Favorite };
