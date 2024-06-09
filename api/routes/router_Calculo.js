// const express = require('express');

// const router = express.Router();

// module.exports = router;

const express = require("express");

const controllerCalculo = require("../controllers/controller_Calculo");
const validarToken = require('../middlewares/auth');
const router = express.Router();

router.post("/", controllerCalculo.validarDados,
 controllerCalculo.criar);

router.get("/", validarToken, controllerCalculo.listarTodos);

router.get("/:id", controllerCalculo.buscarPeloId, controllerCalculo.obter);

router.put("/:id", controllerCalculo.buscarPeloId, controllerCalculo.validarDados, controllerCalculo.atualizar);

router.delete("/:id", controllerCalculo.buscarPeloId, controllerCalculo.remover);

module.exports = router;