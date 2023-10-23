const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");

const user = require("./controllers/user");
const ErrorLogger = require("./middlewares/error");

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use("/", express.static("/uploads"));
app.use(bodyParser.urlencoded({ extended: true }));
//config

if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({
    path: "backend/config/.env",
  });
}

app.use("/api/v1/user", user);

app.use(ErrorLogger);

module.exports = app;
