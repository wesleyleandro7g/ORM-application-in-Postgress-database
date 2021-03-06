const { Model, DataTypes } = require("sequelize");

const sequelize = require("../database");

const Users = require("./User");

class Address extends Model {}
Address.init(
  {
    zip_code: DataTypes.STRING,
    number: DataTypes.INTEGER,
    street: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
  },
  { sequelize, modelName: "address" }
);

Users.hasMany(Address);

Address.belongsTo(Users, {
  foreignKey: "user_id",
  as: "address",
});

module.exports = Address;
