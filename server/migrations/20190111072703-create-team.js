module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Teams', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      uniqueId: {
        type: Sequelize.STRING
      },
      fullName: {
        type: Sequelize.STRING
      },
      shortName: {
        type: Sequelize.STRING
      },
      sport: {
        type: Sequelize.STRING
      },
      logoPath: {
        type: Sequelize.STRING
      },
      teamPicPath: {
        type: Sequelize.STRING
      },
      mainLocation: {
        type: Sequelize.STRING
      },
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
    return queryInterface.dropTable('Teams');
  }
};