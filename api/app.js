require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const swaggerUI = require('swagger-ui-espress');

var app = express();

mongoose.connect(process.env.MONGODB_URL);

const routerHistorico = require('./routes/router_historico');
const routerApidocs_routes = require('./routes/apidocs_routes');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api-docs_routes', routerApidocs_routes);
app.use('/historico', routerHistorico);

module.exports = app;
