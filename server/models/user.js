/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	const User = sequelize.define('user', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		firstname: {
			type: DataTypes.STRING(45),
			allowNull: false,
			field: 'firstname'
		},
		lastname: {
			type: DataTypes.STRING(45),
			allowNull: false,
			field: 'lastname'
		},
		username: {
			type: DataTypes.STRING(45),
			allowNull: false,
			field: 'username'
		},
		password: {
			type: DataTypes.STRING(1000),
			allowNull: false,
			field: 'password'
		},
		email: {
			type: DataTypes.STRING(45),
			allowNull: false,
			field: 'email'
		},
		phone: {
			type: DataTypes.STRING(45),
			allowNull: true,
			field: 'phone'
		},
		birthdate: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'birthdate'
		},
		size: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			field: 'size'
		},
		weight: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			field: 'weight'
		},
		role: {
			type: DataTypes.STRING(45),
			allowNull: true,
			field: 'role'
		},
		licenceNumber: {
			type: DataTypes.STRING(45),
			allowNull: true,
			field: 'licence_number'
		},
		jerseyNumber: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			field: 'jersey_number'
		},
		playRole: {
			type: DataTypes.STRING(45),
			allowNull: true,
			field: 'play_role'
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
		tableName: 'user'
	});

	User.associate = models => {
		User.belongsToMany(models.team, {
			through: 'user_has_team',
      as: 'teams',
			foreignKey: 'user_id'
		})
	}

	return User;
};
