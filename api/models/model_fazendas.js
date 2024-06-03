const mongoose = require("mongoose");

const fazendaSchema = new mongoose.Schema({
  nome: { type: String, trim: true, required: true },
  localizacao: { type: String, trim: true, required: true },
  area: { type: Number, required: true },
  culturas: { type: [String], default: [] },
  proprietario: { type: String, trim: true, required: true }
});

module.exports = mongoose.model("Fazendas", fazendaSchema);
