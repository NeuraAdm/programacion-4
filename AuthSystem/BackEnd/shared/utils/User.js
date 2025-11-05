const { DataTypes } = require("sequelize");
const { sequelize } = require("../../config/database");

const User = sequelize.define("User", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  documentNumber: { type: DataTypes.STRING(20), unique: true },
  email: { type: DataTypes.STRING(100), unique: true },
  password: { type: DataTypes.STRING(255) },
  username: { type: DataTypes.STRING(50) },
  isActive: { type: DataTypes.BOOLEAN, defaultValue: true },
});

module.exports = User;
