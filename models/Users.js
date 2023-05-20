const  sequelize = require('../config/db_config');
var { DataTypes } = require('sequelize');

var Users = sequelize.define('users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    firstname: { type: DataTypes.STRING},
    lastname: { type: DataTypes.STRING},
    email: { type: DataTypes.STRING},
    password: { type: DataTypes.STRING },
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
        //  onUpdate: sequelize.literal("CURRENT_TIMESTAMP")

    }
},
    
    { timestamps: false }
);



module.exports = Users;