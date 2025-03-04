var express = require("express");
var express = require('express')
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require('cors')
 

var indexRouter = require("./routes/index");
var adminRouter = require('./routes/adminRoute')
var getUserRouter = require('./routes/users');

var app = express();
app.use(cors())

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use('/', indexRouter);
app.use('/', getUserRouter);
app.use('/api/v1', adminRouter);

module.exports = app;
