const sequelize  = require('../config/db_config');
var { DataTypes } = require('sequelize');
var Users=require('./Users');
var Roles = sequelize.define('roles', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    roleName: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING },
    isDeleted: {
        type: DataTypes.BOOLEAN, defaultValue: false
    },
    createdAt: {
        type: 'TIMESTAMP',
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
    },
    updatedAt: {
        type: "TIMESTAMP",
        defaultValue: sequelize.literal("0 ON UPDATE CURRENT_TIMESTAMP"),
        allowNull: false,
        
    }
},
    { timestamps: false }
);
Users.belongsToMany(Roles, { through: 'UserRoles', timestamps: false });
Roles.belongsToMany(Users, { through: 'UserRoles', timestamps: false });
module.exports = Roles;