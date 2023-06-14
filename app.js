var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

const clients_router = require("./routes/clients_router");
const dishes_router = require("./routes/dishes_router");
const events_router = require("./routes/events_router");
const workers_router = require("./routes/workers_router");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/clients", clients_router);
app.use("/dishes", dishes_router);
app.use("/events", events_router);
app.use("/workers", workers_router);

module.exports = app;
