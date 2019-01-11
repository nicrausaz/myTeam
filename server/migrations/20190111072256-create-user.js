module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
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
        type: DataTypes.DATETIME
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
      teamAdmin: DataTypes.BOOLEAN,
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface /*, Sequelize */) => {
    return queryInterface.dropTable('Users');
  }
};