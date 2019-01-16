/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('userHasTeam', {
		userId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'user',
				key: 'id'
			},
			field: 'user_id'
		},
		teamId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'team',
				key: 'id'
			},
			field: 'team_id'
		},
		isAdmin: {
			type: DataTypes.INTEGER(4),
			allowNull: true,
			field: 'is_admin'
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
		tableName: 'user_has_team'
	});
};
