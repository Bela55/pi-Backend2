const mongoose = require("mongoose");

const CalculoSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
    trim: true,
    uppercase: true,
    minlength: 3,
    maxlength: 50
  },
  valor: { 
    type: Number, 
    required: true,
    min: 0,
    max: 1000000
  },
  criadoEm: {
    type: Date,
    default: Date.now
  },

});

// Adicionando um índice ao campo 'nome'
CalculoSchema.index({ nome: 1 });

module.exports = mongoose.model("Calculo", CalculoSchema);
