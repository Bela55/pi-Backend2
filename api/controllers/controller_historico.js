const mongoose = require('mongoose');
const Historico = require("../models/model_historico");

async function validarDados(req, res, next) {
  const historico = new Historico(req.body);
  try {
    await historico.validate();
    next();
  } catch (err) {
    res.status(422).json({ msg: "Dados da fazenda inválidos" });
  }
}

async function criar(req, res) {
  const historico = await Historico.create(req.body);
  res.status(201).json(historico);
}

async function listarTodos(req, res) {
  const historico = await Historico.find({});
  res.json(historico);
}

async function buscarPeloId(req, res, next){
    try {
      const id = new mongoose.Types.ObjectId(req.params.id);
      const historico = await Historico.findOne({ _id: id });
      if (historico) {
        next();
    } else {
        res.status(404).json({msg: "Histórico não encontrado"})
    }
   } catch(err) {
      res.status(400).json({msg: "Id inválido"});
    }
}

async function obter(req, res) {
    const id = new mongoose.Types.ObjectId(req.params.id);
    const historico = await Historico.findOne({ _id: id });
    res.json(historico);
}

async function atualizar(req, res) {
  const id = new mongoose.Types.ObjectId(req.params.id);
  const historico = await Historico.findOneAndUpdate({ _id: id }, req.body);
  res.json({});
}

async function remover(req,res){
    const id = new mongoose.Types.ObjectId(req.params.id);
  const historico = await Historico.findOneAndDelete({ _id: id }, req.body);
    res.status(204).end();
}

module.exports = { validarDados, criar, listarTodos, buscarPeloId, obter, atualizar, remover };