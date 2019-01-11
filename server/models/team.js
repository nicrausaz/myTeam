'use strict';
module.exports = (sequelize, DataTypes) => {
  const Team = sequelize.define('Team', {
    id: {
      type: DataTypes.INTEGER,
      unique: true,
      autoIncrement: true,
      primaryKey: true
    },
    uniqueId: DataTypes.STRING,
    fullName: DataTypes.STRING,
    shortName: DataTypes.STRING,
    sport: DataTypes.STRING,
    logoPath: DataTypes.STRING,
    teamPicPath: DataTypes.STRING,
    mainLocation: DataTypes.STRING
  })

  Team.associate = (models) => {

  }
  return Team
}