/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('event', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			field: 'id'
		},
		name: {
			type: DataTypes.STRING(100),
			allowNull: true,
			field: 'name'
		},
		date: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'date'
		},
		time: {
			type: DataTypes.STRING(45),
			allowNull: true,
			field: 'time'
		},
		location: {
			type: DataTypes.STRING(45),
			allowNull: true,
			field: 'location'
		},
		type: {
			type: DataTypes.STRING(45),
			allowNull: true,
			field: 'type'
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
		},
		eventcol: {
			type: DataTypes.STRING(45),
			allowNull: true,
			field: 'Eventcol'
		},
		typeId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'type',
				key: 'id'
			},
			field: 'type_id'
		}
	}, {
		tableName: 'event'
	});
};
