// var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var env = require('dotenv').config();
var app = express();
var sequelize = require('./config/db_config');
var Users = require('./models/Users');
const Roles = require('./models/Roles');
var userRouter = require('./routes/usersRouter');
var roleRouter = require('./routes/rolesRouter');
app.use(cookieParser());
app.use(express.urlencoded());
app.use(express.json());
var port = process.env.PORT || 8080;;
const router = express.Router();
//app.use('/users', userRouter);
app.use('/roles', roleRouter);



app.listen(port, () => {
  sequelize.sync({ force: false })

  console.log(`Server is running on port ${port}`);
})
