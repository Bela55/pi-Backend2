const express = require("express");
const router = express.Router();
const fazendaController = require("../controllers/controller_fazendas");
const auth = require("../middlewares/auth");

router.post(
  "/fazendas",
  auth.authenticateToken,
  fazendaController.validarDados,
  fazendaController.criar
);
router.get("/fazendas", auth.authenticateToken, fazendaController.listarTodos);
router.get(
  "/fazendas/:id",
  auth.authenticateToken,
  fazendaController.buscarPeloId,
  fazendaController.obter
);
router.put(
  "/fazendas/:id",
  auth.authenticateToken,
  fazendaController.buscarPeloId,
  fazendaController.validarDados,
  fazendaController.atualizar
);
router.delete(
  "/fazendas/:id",
  auth.authenticateToken,
  fazendaController.buscarPeloId,
  fazendaController.remover
);

module.exports = router;
