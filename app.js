var express = require("express");
var express = require('express')
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require('cors')
 

var indexRouter = require("./routes/index");
var loginRouter = require("./routes/user/user-login");
var registerRouter = require("./routes/user/user-register");
var bookingRoute = require("./routes/admin/bookings");
var categoryRouter = require('./routes/admin/categories');
var productRouter = require('./routes/admin/products');
var transferRoute = require('./routes/admin/transfers');
var app = express();
app.use(cors())

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);

// for route  etc
app.use('/', loginRouter);
app.use('/', registerRouter);
app.use('/', categoryRouter);
app.use('/', productRouter);
app.use('/', transferRoute)
app.use('/', bookingRoute);

module.exports = app;
