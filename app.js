var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var userLoginRouter = require("./routes/user/user-login");
var userRegisterRouter = require("./routes/user/user-register");
var adminProductsRouter = require("./routes/admin/products");
var adminBookingsRouter = require("./routes/admin/bookings");
var adminTransfersRouter = require("./routes/admin/transfers");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/login", userLoginRouter);
app.use("/register", userRegisterRouter);
app.use("/products", adminProductsRouter);
app.use("/bookings", adminBookingsRouter);
app.use("/transfers", adminTransfersRouter);

module.exports = app;
