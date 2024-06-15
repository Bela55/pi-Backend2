require('dotenv').config();
const mongoose = require('mongoose');
var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

mongoose.connect(process.env.MONGODB_URL);

const routerHistorico = require('./routes/router_historico');
const routerApidocs_routes = require('./routes/apidocs_routes');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api-docs_routes', routerApidocs_routes);
app.use('/historico', routerHistorico);

module.exports = app;
