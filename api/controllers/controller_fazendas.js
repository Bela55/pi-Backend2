const mongoose = require("mongoose");
const Produto = require("../models/model_fazendas");

async function validarDados(req, res, next) {
  const fazenda = new Fazenda(req.body);
  try {
    await fazenda.validate();
    next();
  } catch (err) {
    res.status(422).json({ msg: "Dados da fazenda invalidos" });
  }
}

async function criar(req, res) {
  const fazenda = await Fazenda.create(req.body);
  res.status(201).json(fazenda);
}

async function listarTodos(req, res) {
  const fazendas = await Fazenda.find({});
  res.json(fazenda);
}

async function buscarPeloId(req, res, next){
    try {
      const id = new mongoose.Types.ObjectId(req.params.id);
      const fazenda = await Fazenda.findOne({ _id: id });
      next();
    } catch(err) {
      res.status(404).json({msg: "Fazenda não encontrada"});
    }
}

async function obter(req, res) {
    const id = new mongoose.Types.ObjectId(req.params.id);
    const fazenda = await Fazenda.findOne({ _id: id });
    res.json(fazenda);
}

async function atualizar(req, res) {
  const id = new mongoose.Types.ObjectId(req.params.id);
  const fazenda = await Fazenda.findOneAndUpdate({ _id: id }, req.body);
  res.json(fazenda);
}


async function remover(req,res){
    const id = new mongoose.Types.ObjectId(req.params.id);
  const fazenda = await Fazenda.findOneAndDelete({ _id: id }, req.body);
    res.status(204).end();
}
module.exports = { validarDados, criar, listarTodos, buscarPeloId, obter, atualizar, remover };
