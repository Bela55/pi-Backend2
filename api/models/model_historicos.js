const mongoose = require("mongoose");

const historicoSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
    trim: true,
    uppercase: true,
  },
  Nome: { type: Number, String, required: true },
});

module.exports = mongoose.model("Historicos", historicoSchema);
