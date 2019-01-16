/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
	const Team = sequelize.define('team', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		uniqueId: {
			type: DataTypes.STRING(45),
			allowNull: false,
			field: 'uniqueId'
		},
		fullname: {
			type: DataTypes.STRING(45),
			allowNull: false,
			field: 'fullname'
		},
		shortname: {
			type: DataTypes.STRING(45),
			allowNull: false,
			field: 'shortname'
		},
		sport: {
			type: DataTypes.STRING(45),
			allowNull: false,
			field: 'sport'
		},
		logoPath: {
			type: DataTypes.STRING(1000),
			allowNull: true,
			field: 'logo_path'
		},
		teampicPath: {
			type: DataTypes.STRING(1000),
			allowNull: true,
			field: 'teampic_path'
		},
		mainLocation: {
			type: DataTypes.STRING(100),
			allowNull: true,
			field: 'main_location'
		},
		createdAt: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'createdAt'
		},
		updatedAt: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'updatedAt'
		}
	}, {
			tableName: 'team'
		});
	return Team
};
