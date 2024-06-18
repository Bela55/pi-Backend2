const mongoose = require("mongoose");
const Usuario = require("../models/user");
const bcrypt = require("bcrypt");

// C R U D

const listarUmUsuario = async (req, res) => {
  // Validações
  try {
    const usuario = await Usuario.findById(req.params.id);
    if (usuario) {
      res.status(200).json({
        status: "success",
        data: usuario,
      });
    } else {
      res.status(404).json({
        status: "fail",
        message: "Usuário não encontrado.",
      });
    }
  } catch (e) {
    res.status(500).json({
      status: "error",
      message:
        "Um erro ocorreu ao tentar processar sua requisição. Tente novamente mais tarde.",
    });
  }
};

const listarUsuarios = async (req, res) => {
  // Validações
  try {
    const usuarios = await Usuario.find();
    res.status(200).json({ status: "success", data: usuarios });
  } catch (e) {
    res.status(500).json({
      status: "error",
      message:
        "Um erro ocorreu ao tentar processar sua requisição. Tente novamente mais tarde.",
    });
  }
};

const criarUsuario = async (req, res) => {
  // Validações
  try {
    // Verificar se o usuário já está cadastrado
    const usuarioExistente = await Usuario.findOne({ email: req.body.email });
    if (usuarioExistente)
      return res
        .status(409)
        .json({ status: "fail", message: "Usuário já cadastrado." });

    const usuario = await Usuario.create({
      nome: req.body.nome.trim(),
      email: req.body.email.trim(),
      senha: await bcrypt.hash(req.body.senha, 9),
    });
    res.status(201).json({ status: "success", data: usuario });
  } catch (e) {
    res.status(500).json({
      status: "error",
      message:
        "Um erro ocorreu ao tentar processar sua requisição. Tente novamente mais tarde.",
    });
  }
};

const editarUsuario = async (req, res) => {
  // Validações
  try {
    let usuario = await Usuario.findById(req.params.id);

    if (usuario) {
      usuario.nome = req.body.nome;
      usuario.email = req.body.email;
      usuario.senha = await bcrypt.hash(req.body.senha, 9);
      usuario.save();
      res.status(200).json({ status: "success", data: usuario });
    } else {
      res.status(404).json({ status: "fail" });
    }
  } catch (e) {
    res.status(500).json({
      status: "error",
      message:
        "Um erro ocorreu ao tentar processar sua requisição. Tente novamente mais tarde.",
    });
  }
};

const deletarUsuario = async (req, res) => {
  // Validações
  try {
    let usuario = await Usuario.findById(req.params.id);
    if (usuario) {
      await Usuario.findByIdAndDelete(req.params.id);
      res.status(204).json({ status: "success", data: "" });
    } else {
      res.status(404).json({ status: "fail", data: "Usuário não encontrado." });
    }
  } catch (e) {
    res.status(500).json({
      status: "error",
      message:
        "Um erro ocorreu ao tentar processar sua requisição. Tente novamente mais tarde.",
    });
  }
};

module.exports = {
  listarUmUsuario,
  listarUsuarios,
  criarUsuario,
  editarUsuario,
  deletarUsuario,
};
