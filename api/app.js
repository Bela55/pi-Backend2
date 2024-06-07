require('dotenv').config();
const mongoose = require('mongoose');
var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

mongoose.connect(process.env.MONGODB_URL);

const routerApidocs = require('./routes/router_apidocs');
const routerFazendas = require('./routes/router_historicos');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/users', usersRouter);
app.use('/api-docs', routerApidocs);
app.use('/fazendas', routerHistoricos);

module.exports = app;
