const express = require("express");

const controllerHistorico = require("../controllers/controller_historico");

const router = express.Router();

router.post("/", controllerHistorico.validarDados, controllerHistorico.criar);

router.get("/", controllerHistorico.listarTodos);

router.get("/:id", controllerHistorico.buscarPeloId, controllerHistorico.obter);

router.put("/:id", controllerHistorico.buscarPeloId, controllerHistorico.validarDados, controllerHistorico.atualizar);

router.delete("/:id", controllerHistorico.buscarPeloId, controllerHistorico.remover);

module.exports = router;