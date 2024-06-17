require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const swaggerUI = require('swagger-ui-espress');
const fazendaRoutes = require("./routes/router_fazendas");
const routerHistorico = require('./routes/router_historico');
const routerCalculo = require('./routes/router_Calculo');
const apidocsRoutes = require("./routes/router_apidocs");


var app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// Conecte-se ao banco de dados MongoDB
mongoose.connect(process.env.MONGODB_URL
).then(() => {
  console.log("Conectado ao MongoDB");
}).catch(err => {
  console.error("Erro ao conectar ao MongoDB", err);
});

// Use as rotas
app.use("/fazenda", fazendaRoutes);
app.use('/historico', routerHistorico);
app.use('/calculo', routerCalculo);
app.use("/apidocs", apidocsRoutes);

module.exports = app;