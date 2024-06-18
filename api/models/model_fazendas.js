const mongoose = require("mongoose");

const fazendaSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  localizacao: {
    type: String,
    required: true
  },
  // Adicione outros campos conforme necessário
});

const Fazenda = mongoose.model("Fazenda", fazendaSchema);

module.exports = Fazenda;
