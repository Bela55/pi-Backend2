const Usuario = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const loginDoUsuario = async (req, res) => {
  const { email, senha } = req.body;
  const user = await Usuario.findOne({ email });
  if (!user) {
    return res
      .status(400)
      .json({ status: "fail", message: "Credenciais inválidas." });
  }
  const isValid = await bcrypt.compare(senha, user.senha);
  if (!isValid) {
    return res
      .status(400)
      .json({ status: "fail", message: "Credenciais inválidas." });
  }
  const token = jwt.sign({ email }, process.env.SEGREDO);
  res.status(200).json({
    status: "success",
    message: "Login realizado com sucesso.",
    data: token,
  });
};

module.exports = { loginDoUsuario };
