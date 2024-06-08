require('dotenv').config();
const mongoose = require('mongoose');
var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

mongoose.connect(process.env.MONGODB_URL);

const routerApidocs_routes = require('./routes/apidocs_routes');
const routerHistoricos = require('./routes/router_historicos');
const usersRouter_historicos = require ('./routes/router_historicos')

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/users_routes', usersRouter_historicos);
app.use('/api-docs_routes', routerApidocs_routes);
app.use('/historicos', routerHistoricos);

module.exports = app;
