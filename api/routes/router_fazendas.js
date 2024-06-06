const express = require("express");

const controllerFazendas = require("../controllers/controller_fazendas");
const validarToken = require('../middlewares/auth');
const router = express.Router();

router.post("/", controllerFazendas.validarDados,
 controllerFazendas.criar);

router.get("/", validarToken, controllerFazendas.listarTodos);

router.get("/:id", controllerFazendas.buscarPeloId, controllerFazendas.obter);

router.put("/:id", controllerFazendas.buscarPeloId, controllerFazendas.validarDados, controllerFazendas.atualizar);

router.delete("/:id", controllerFazendas.buscarPeloId, controllerFazendas.remover);

module.exports = router;