const mongoose = require("mongoose");
const Produto = require("../models/model_historicos");

async function validarDados(req, res, next) {
  const historico = new Historico(req.body);
  try {
    await historico.validate();
    next();
  } catch (err) {
    res.status(422).json({ msg: "Dados invalidos" });
  }
}

async function criar(req, res) {
  const historico = await Historico.create(req.body);
  res.status(201).json(historico);
}

async function listarTodos(req, res) {
  const historicos = await Historico.find({});
  res.json(historico);
}

async function buscarPeloId(req, res, next){
    try {
      const id = new mongoose.Types.ObjectId(req.params.id);
      const historico = await Historico.findOne({ _id: id });
      next();
    } catch(err) {
      res.status(404).json({msg: "Não encontrado"});
    }
}

async function obter(req, res) {
    const id = new mongoose.Types.ObjectId(req.params.id);
    const historico = await Historico.findOne({ _id: id });
    res.json(historico);
}

async function atualizar(req, res) {
  const id = new mongoose.Types.ObjectId(req.params.id);
  const historico = await Fazenda.findOneAndUpdate({ _id: id }, req.body);
  res.json(historico);
}


async function remover(req,res){
    const id = new mongoose.Types.ObjectId(req.params.id);
  const historico = await Historico.findOneAndDelete({ _id: id }, req.body);
    res.status(204).end();
}
module.exports = { validarDados, criar, listarTodos, buscarPeloId, obter, atualizar, remover };