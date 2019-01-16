/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('type', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			field: 'id'
		},
		name: {
			type: DataTypes.STRING(45),
			allowNull: true,
			field: 'name'
		},
		teamId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'team',
				key: 'id'
			},
			field: 'team_id'
		}
	}, {
		tableName: 'type'
	});
};
