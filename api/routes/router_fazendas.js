const express = require("express");
const router = express.Router();
const fazendaController = require("../controllers/controller_fazendas");
const auth = require("../middlewares/auth");

router.post("/fazendas", auth, fazendaController.validarDados, fazendaController.criar);
router.get("/fazendas", auth, fazendaController.listarTodos);
router.get("/fazendas/:id", auth, fazendaController.buscarPeloId, fazendaController.obter);
router.put("/fazendas/:id", auth, fazendaController.buscarPeloId, fazendaController.validarDados, fazendaController.atualizar);
router.delete("/fazendas/:id", auth, fazendaController.buscarPeloId, fazendaController.remover);

module.exports = router;
