const jwt = require("jsonwebtoken");

function validarToken(req, res, next) {
  try {
    const token = req.headers["authorization"];
    if (jwt.verify(token, process.env.SEGREDO)) {
      next();
    } else {
      res
        .status(401)
        .json({ message: "Usuário não autenticado. Acesso negado!" });
    }
  } catch (e) {
    res
      .status(401)
      .json({ message: "Usuário não autenticado. Acesso negado!" });
  }
}

module.exports = { validarToken };
