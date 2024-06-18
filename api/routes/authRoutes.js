const express = require("express");
const { loginDoUsuario } = require("../controllers/authController");
const router = express.Router();

router.post("/login", loginDoUsuario);

module.exports = router;
