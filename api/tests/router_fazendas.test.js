const supertest = require("supertest");

const app = require("../app");

const request = supertest(app);

let id = null;

describe("API Historico de Fazendas", function () {
   test("Deve retornar 201 e um JSON para POST /fazendas", async () => {
     const result = await request
     .post("/fazendas")
     .send({ nome: "Rancho Fundo", calculo: 15.0});
   id = result.body._id.toString();
   expect(result.status).toBe(201);
   expect(result.type).toBe("application/json");
   });

  test("Deve retornar 422 e um JSON da fazenda criada para POST /fazendas", async () => {
    const result = await request
    .post("/fazendas")
    .send({});
  expect(result.status).toBe(422);
  expect(result.type).toBe("application/json");
  });

  test("Deve retornar 200 e um JSON array para GET /fazendas", async () => {
    const result = await request
    .get("/fazendas")
  expect(result.status).toBe(200);
  expect(result.type).toBe("application/json");
  if (result.body.length > 0){
    id = result.body[0]._id.toString();
  }
  });

  test("Deve retornar 200 e um JSON para GET /fazendas/id", async () => {
    const result = await request
    .get(`/fazendas/${id}`)
  expect(result.status).toBe(200);
  expect(result.type).toBe("application/json");
  });

  test("Deve retornar 404 e um JSON para GET /fazendas/id", async () => {
    const result = await request
    .get(`/fazendas/id`)
  expect(result.status).toBe(404);
  expect(result.type).toBe("application/json");
  });

  test("Deve retornar 200 para PUT /fazendas/id", async () => {
    const result = await request
    .put(`/fazendas/${id}`)
    .send({nome: "Rancho Fundo", calculo: 22.0});
  expect(result.status).toBe(200);
  expect(result.type).toBe("application/json");
  });

  test("Deve retornar 404 para PUT /fazendas/id", async () => {
    const result = await request
    .put(`/fazendas/id`)
  expect(result.status).toBe(404);
  expect(result.type).toBe("application/json");
  });

  test("Deve retornar 422 e um JSON para PUT /fazendas/id", async () => {
    const result = await request
    .put(`/fazendas/${id}`)
    .send({});
  expect(result.status).toBe(422);
  expect(result.type).toBe("application/json");
});

  test("Deve retornar 204 e um JSON para DELETE /fazends/id", async () => {
    const result = await request
    .delete(`/fazendas/${id}`)
  expect(result.status).toBe(204);
  expect(result.type).toBe("");
  });
  test("Deve retornar 404 e um JSON para DELETE /fazendas/id", async () => {
    const result = await request
    .delete(`/fazendas/id`)
  expect(result.status).toBe(404);
  expect(result.type).toBe("application/json");
  });

});
