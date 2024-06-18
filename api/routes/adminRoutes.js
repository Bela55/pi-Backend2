const express = require("express");
const { carregarConteudoSeguro } = require("../controllers/adminController");
const { validarToken } = require("../middleware/auth");

const router = express.Router();

router.get("/", validarToken, carregarConteudoSeguro);

module.exports = router;
