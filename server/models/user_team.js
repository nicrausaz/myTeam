/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	const UserTeam = sequelize.define('userTeam', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		fkUserId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'user',
				key: 'id'
			},
			field: 'fk_user_id'
		},
		fkTeamId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'team',
				key: 'id'
			},
			field: 'fk_team_id'
		},
		isAdmin: {
			type: DataTypes.INTEGER(4),
			allowNull: false,
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
		tableName: 'user_team'
	});
	return UserTeam;
};
