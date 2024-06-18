const express = require("express");

const controllerCalculo = require("../controllers/controller_Calculo");
const auth = require("../middlewares/auth");
const router = express.Router();

router.post("/", controllerCalculo.validarDados, controllerCalculo.criar);

router.get("/", auth.authenticateToken, controllerCalculo.listarTodos);

module.exports = router;
