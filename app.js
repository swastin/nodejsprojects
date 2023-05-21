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
var userRouter = require('./routes/userRoutes');
var roleRouter = require('./routes/roleRoutes');
app.use('/user', userRouter);
app.use('/role', roleRouter);



app.listen(port, () => {
  sequelize.sync({ force: false })

  console.log(`Server is running on port ${port}`);
})
