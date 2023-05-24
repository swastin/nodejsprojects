
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var cors = require('cors');
var env = require('dotenv').config();
var app = express();
var sequelize = require('./config/db_config');
app.use(cors());
var userRouter = require('./routes/usersRouter');
var roleRouter = require('./routes/rolesRouter');
var port = process.env.PORT || 8080;;
const router = express.Router();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', roleRouter);
app.use('/', userRouter);
app.listen(port, () => {
  sequelize.sync({ force: false })

  console.log(`Server is running on port ${port}`);
})
