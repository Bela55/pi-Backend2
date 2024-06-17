const mongoose = require("mongoose");
const Fazendas = require("../models/model_fazendas");

async function validarDados(req, res, next) {
  const fazenda = new Fazenda(req.body);
  try {
    await fazenda.validate();
    next();
  } catch (err) {
    res.status(422).json({ msg: "Dados da fazenda inválidos" });
  }
}

async function criar(req, res) {
  try {
    const fazenda = await Fazenda.create(req.body);
    res.status(201).json(fazenda);
  } catch (err) {
    res.status(500).json({ msg: "Erro ao criar a fazenda" });
  }
}

async function listarTodos(req, res) {
  try {
    const fazendas = await Fazenda.find({});
    res.json(fazendas);
  } catch (err) {
    res.status(500).json({ msg: "Erro ao listar fazendas" });
  }
}

async function buscarPeloId(req, res, next) {
  try {
    const id = new mongoose.Types.ObjectId(req.params.id);
    const fazenda = await Fazenda.findOne({ _id: id });
    if (fazenda) {
      req.fazenda = fazenda;
      next();
    } else {
      res.status(404).json({ msg: "Fazenda não encontrada" });
    }
  } catch (err) {
    res.status(400).json({ msg: "ID inválido" });
  }
}

async function obter(req, res) {
  res.json(req.fazenda);
}

async function atualizar(req, res) {
  try {
    const fazenda = await Fazenda.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(fazenda);
  } catch (err) {
    res.status(500).json({ msg: "Erro ao atualizar a fazenda" });
  }
}

async function remover(req, res) {
  try {
    await req.fazenda.remove();
    res.status(204).end();
  } catch (err) {
    res.status(500).json({ msg: "Erro ao remover a fazenda" });
  }
}

module.exports = {
  validarDados,
  criar,
  listarTodos,
  buscarPeloId,
  obter,
  atualizar,
  remover
};
