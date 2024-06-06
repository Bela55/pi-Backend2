const mongoose = require("mongoose");

const fazendaSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
    trim: true,
    uppercase: true,
  },
  Nome: { type: Number, required: true },
});

module.exports = mongoose.model("Fazendas", fazendaSchema);
