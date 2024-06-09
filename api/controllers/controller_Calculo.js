// function acao(req, res){}

// module.exports = {acao};

const mongoose = require("mongoose");
const Calculo = require("../models/model_Calculo");

async function validarDados(req, res, next) {
  const calculo = new Calculo(req.body);
  try {
    await calculo.validate();
    next();
  } catch (err) {
    res.status(422).json({ msg: "Dados do protudo invalidos" });
  }
}

async function criar(req, res) {
  const calculo = await Calculo.create(req.body);
  res.status(201).json(calculo);
}

async function listarTodos(req, res) {
  const calculos = await Calculo.find({});
  res.json(calculos);
}

module.exports = { validarDados, criar, listarTodos };