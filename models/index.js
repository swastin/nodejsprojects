var Sequelize = require('sequelize');
var env = require('dotenv').config();
/**
 * DB_USER_NAME= root,
DB_PASSWORD=password,
DB_NAME=blogspot,
DB_HOST= 127.0.0.1,
DB_DIALECT= mysql
 * 
 * 
 * 
 */
var database = process.env.DB_NAME;
var username = process.env.DB_USER_NAME;
var password = process.env.DB_PASSWORD;
var host = process.env.DB_HOST;
//var port = process.env.PORT;
var dialect = process.env.DB_DIALECT;
console.log(database, username, password, host, dialect);
var sequelize = new Sequelize(database, username, password,
    {
        host: host,
        dialect: dialect
    });

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch((error) => {
    console.error('Unable to connect to the database:', error);
})

module.exports = sequelize;