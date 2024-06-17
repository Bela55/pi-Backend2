const express = require("express");
const mongoose = require("mongoose");
const fazendaRoutes = require("./routes/router_fazendas");
const apidocsRoutes = require("./routes/router_apidocs");
require("dotenv").config();

const app = express();

app.use(express.json());

// Conecte-se ao banco de dados MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
}).then(() => {
  console.log("Conectado ao MongoDB");
}).catch(err => {
  console.error("Erro ao conectar ao MongoDB", err);
});

// Use as rotas
app.use("/api", fazendaRoutes);
app.use("/", apidocsRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
