/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('teamHasEvent', {
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
		eventId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'event',
				key: 'id'
			},
			field: 'event_id'
		}
	}, {
		tableName: 'team_has_event'
	});
};
