// const supertest = require('supertest');

// const app = require('../app');

// const request = supertest(app);

// describe('API Loja Virtual', () => {
//     test('Deve retornar CODIGO e CORPO no VERBO /ROTA', async () => {});
// });


const supertest = require("supertest");

const app = require("../app");

const request = supertest(app);

let id = null;

describe("Calculo da Fazenda", function () {
   test("Deve retornar 201 e um JSON para POST /calculos", async () => {
     const result = await request
     .post("/calculos")
     .send({ nome: "Fazenda Jasmim", valor: 

     "Volume do biodigestor: 000 m2",
     "Altura total do biodigestor: 000 m",
     "Diametro da câmara do biodigestor: 00 m",
     "Altura da câmara do biodigetor: 00 m",
     "Diâmetro do biodigestor: 00 m",
     "Altura do gasômetro: 00 m",
     "Comprimento do cano guia: 00 m",
     "Dimenssões dos tanques de carga e descarga: 00 m",
     "Comprimento do cano de descarga: 00 m",
     "Comprimento do cano de carga: 00 m",
     "Volume de gás produzido pelo biodigestor: 00 m2"
     
    });
   id = result.body._id.toString();
   expect(result.status).toBe(201);
   expect(result.type).toBe("application/json");
   });

  test("Deve retornar 422 e um JSON do produto criado para POST /calculos", async () => {
    const result = await request
    .post("/calculos")
    .send({});
  expect(result.status).toBe(422);
  expect(result.type).toBe("application/json");
  });

  test("Deve retornar 200 e um JSON array para GET /calculos", async () => {
    const result = await request
    .get("/calculos")
  expect(result.status).toBe(200);
  expect(result.type).toBe("application/json");
  if (result.body.length > 0){
    id = result.body[0]._id.toString();
  }
  });

  test("Deve retornar 200 e um JSON para GET /calculos/id", async () => {
    const result = await request
    .get(`/calculos/${id}`)
  expect(result.status).toBe(200);
  expect(result.type).toBe("application/json");
  });

  test("Deve retornar 404 e um JSON para GET /calculos/id", async () => {
    const result = await request
    .get(`/calculos/id`)
  expect(result.status).toBe(404);
  expect(result.type).toBe("application/json");
  });

  test("Deve retornar 200 para PUT /calculos/id", async () => {
    const result = await request
    .put(`/calculos/${id}`)
    .send({nome: "banana nanica", preco: 22.0});
  expect(result.status).toBe(200);
  expect(result.type).toBe("application/json");
  });

  test("Deve retornar 404 para PUT /calculos/id", async () => {
    const result = await request
    .put(`/calculos/id`)
  expect(result.status).toBe(404);
  expect(result.type).toBe("application/json");
  });

  test("Deve retornar 422 e um JSON para PUT /calculos/id", async () => {
    const result = await request
    .put(`/calculos/${id}`)
    .send({});
  expect(result.status).toBe(422);
  expect(result.type).toBe("application/json");
});

  test("Deve retornar 204 e um JSON para DELETE /calculos/id", async () => {
    const result = await request
    .delete(`/calculos/${id}`)
  expect(result.status).toBe(204);
  expect(result.type).toBe("");
  });
  test("Deve retornar 404 e um JSON para DELETE /calculos/id", async () => {
    const result = await request
    .delete(`/calculos/id`)
  expect(result.status).toBe(404);
  expect(result.type).toBe("application/json");
  });

});