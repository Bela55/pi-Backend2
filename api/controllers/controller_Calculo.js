const mongoose = require("mongoose");
const Calculo = require("../models/model_Calculo");

async function validarDados(req, res, next) {
  try {
    await req.body.validate();
    next();
  } catch (err) {
    res.status(422).json({ msg: "Dados do produto inválidos" });
  }
}

async function criar(req, res) {
  try {
    const calculo = await Calculo.create(req.body);
    if (calculo) {
      res.status(201).json(calculo);
    } else {
      res.status(500).json({ msg: "Erro ao criar cálculo" });
    }
  } catch (err) {
    res.status(500).json({ msg: "Erro no servidor" });
  }
}

async function listarTodos(req, res) {
  try {
    const calculos = await Calculo.find({});
    res.json(calculos);
  } catch (err) {
    res.status(500).json({ msg: "Erro ao listar cálculos" });
  }
}

module.exports = { validarDados, criar, listarTodos };
