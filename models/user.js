const mongoose = require("mongoose");

const usuarioSchema = new mongoose.Schema({
  nome: { type: String, trim: true, uppercase: true, required: true },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    unique: true,
  },
  senha: { type: String, required: true },
});

module.exports = mongoose.model("Usuario", usuarioSchema);
