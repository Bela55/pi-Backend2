require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

mongoose.connect(process.env.MONGODB_URL);

const baseRouter = require("./routes/routes");
const userRouter = require("./routes/userRoutes");
const authRouter = require("./routes/authRoutes");
const adminRouter = require("./routes/adminRoutes");
const apidocsRouter = require("./routes/apidocs");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", baseRouter);
app.use("/users", userRouter);
app.use("/auth", authRouter);
app.use("/admin", adminRouter);
app.use("/apidocs", apidocsRouter);

module.exports = app;
