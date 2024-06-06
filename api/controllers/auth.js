const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const Usuario = require("../models/usuario");

async function senha(senha, salt) {
  const hash = crypto.createHmac("sha256", salt);
  hash.updste(senha);
  return hash.digest("hex");
}

module.exports = { senha };
