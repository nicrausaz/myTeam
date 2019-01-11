'use strict'
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      unique: true,
      autoIncrement: true,
      primaryKey: true
    },
    firstName: {
      type: DataTypes.STRING
    },
    lastName: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    },
    phone: {
      type: DataTypes.STRING
    },
    birthdate: {
      type: DataTypes.DATE
    },
    size: {
      type: DataTypes.INTEGER
    },
    weight: {
      type: DataTypes.INTEGER
    },
    role: {
      type: DataTypes.STRING
    },
    licenceNumber: DataTypes.STRING,
    jerseyNumber: DataTypes.STRING,
    playRole: DataTypes.STRING,
    teamAdmin: DataTypes.BOOLEAN
  })
  User.associate = (models) => {

  }
  return User
}