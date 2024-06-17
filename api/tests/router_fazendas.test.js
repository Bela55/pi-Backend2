const request = require("supertest");
const app = require("../app");
const mongoose = require("mongoose");
const Fazendas = require("../models/model_fazendas");

// Aqui você pode adicionar seus testes

afterAll(async () => {
  await mongoose.connection.close();
});
