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
  firstname: 'swastin',
  lastname: 'sahoo',
  email: 'swastin95.sahoo@gmail.com',
  password: 'Swastin@1995',
}
app.get('/', async (req, res) => {
  
  role = await Roles.findAll({ where: { roleName: 'admin' } });
var  user= await Users.create({firstname: 'swastin',lastname: 'sahoo',email: 'swastin95.sahoo@gmail.com', password: 'Swastin@1995',
    }, {fields: ['firstname','lastname','email','password']
})
  
  var userrole =await user.addRoles(role);
    res.send(userrole);

})
app.listen(port, () => {
  sequelize.sync({ force: false })

  console.log(`Server is running on port ${port}`);
})
