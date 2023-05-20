var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var faker = require('./node_modules/@faker-js/faker')
var env = require('dotenv').config();
var app = express();
var sequelize = require('./config/db_config');
var Users = require('./models/Users');
const Roles = require('./models/Roles');

var port = process.env.port || 8080;
var role = {
  roleName: 'admin',
  description: 'Do Admin Stuff'
}


var userdata = {
  firstName: 'swastin',
  lastName: 'sahoo',
  email: 'swastin95.sahoo@gmail.com',
  password: 'Swastin@1995',
}
app.get('/', (req, res) => {

  //Roles.create(role,{fields:['roleName','description']})
  role = Roles.findAll({ where: { roleName: 'admin' } }).then((result) => {
    res.send(result)

  }).catch((err) => {
    res.send(err)
  });
})
app.listen(port, () => {
  sequelize.sync({ force:false })

  console.log(`Server is running on port ${port}`);
})
