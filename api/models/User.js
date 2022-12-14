const S = require("sequelize");
const db = require("../config/db");
const bcrypt = require("bcrypt");

class User extends S.Model {}

User.init(
  {
    name: {
      type: S.STRING,
      allowNull: false,
    },
    lastname: {
      type: S.STRING,
      allowNull: false,
    },
    fullname: {
      type: S.VIRTUAL,
      get() {
        return `${this.name} ${this.lastname}`;
      },
    },
    email: {
      type: S.STRING,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: S.STRING,
      allowNull: false,
    },
    nickname: {
      type: S.VIRTUAL,
      get() {
        return this.email.split("@")[0];
      },
    },
    salt: {
      type: S.STRING,
    },
  },
  { sequelize: db, modelName: "user" }
);

User.prototype.hash = (password, salt) => {
  return bcrypt.hash(password, salt);
};

User.prototype.validatePassword = function (password) {
  return this.hash(password, this.salt).then(
    (hashedPassword) => this.password === hashedPassword
  );
};

User.beforeCreate((user) => {
  const salt = bcrypt.genSaltSync();
  user.salt = salt;
  return user.hash(user.password, salt).then((hashedPassword) => {
    user.password = hashedPassword;
  });
});

module.exports = User;
