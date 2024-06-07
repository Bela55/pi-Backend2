const express = require("express");

const controllerHistoricos = require("../controllers/controller_historicos");
const validarToken = require('../middlewares/auth_middlewares');
const router = express.Router();

router.post("/", controllerHistoricos.validarDados,
 controllerHistoricos.criar);

router.get("/", validarToken, controllerHistoricos.listarTodos);

router.get("/:id", controllerHistoricos.buscarPeloId, controllerHistoricos.obter);

router.put("/:id", controllerHistoricos.buscarPeloId, controllerHistoricos.validarDados, controllerHistoricos.atualizar);

router.delete("/:id", controllerHistoricos.buscarPeloId, controllerHistoricos.remover);

module.exports = router;