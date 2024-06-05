// const mongoose = require('mongoose');

// const schema = new mongoose.Schema({

// })

// module.exports = mongoose.model('Recurso', schema);


const mongoose = require("mongoose");

const Calculo = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
    trim: true,
    uppercase: true,
  },
  preco: { type: Number, required: true },
});

module.exports = mongoose.model("Produtos", Calculo);