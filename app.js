var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var env = require('dotenv').config();
var app = express();

var port = process.env.port || 8080;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})

