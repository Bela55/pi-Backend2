const express = require("express");

const router = express.Router();

const userController = require("../controllers/usersController");

router.get("/", userController.listarUsuarios);
router.get("/:id", userController.listarUmUsuario);
router.post("/", userController.criarUsuario);
router.put("/:id", userController.editarUsuario);
router.delete("/:id", userController.deletarUsuario);

module.exports = router;
