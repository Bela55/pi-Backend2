const supertest = require("supertest");

const app = require("../app");

const request = supertest(app);

describe("API Historico de Fazendas", function () {
   test("Deve retornar 201 e um JSON para POST /historico", async () => {
     const result = await request
     .post("/historico")
     .send({ nome: "Rancho da Serra", 
     biodigestorVolume: "000 m²",
     biodigestorTotalHeight: "000 m",
     biodigestorChamberDiameter: "00 m",
     biodigestorChamberHeight: "00 m",
     biodigestorDiameter: "00 m",
     gasometerHeight: "00 m",
     guidePipeLength: "00 m",
     loadDischargeTankDimensions: "00 m",
     dischargePipeLength: "00 m",
     loadPipeLength: "00 m",
     gasVolumeProducedByBiodigestor: "00 m²",
     creationDate: "17/09/2023"});
     
   id = result.body._id.toString();
   expect(result.status).toBe(201);
   expect(result.type).toBe("application/json");
   });

  test("Deve retornar 422 e um JSON do historico criado para POST /historico", async () => {
    const result = await request
    .post("/historico")
    .send({});
  expect(result.status).toBe(422);
  expect(result.type).toBe("application/json");
  });

  test("Deve retornar 200 e um JSON array para GET /historico", async () => {
    const result = await request
    .get("/historico")
  expect(result.status).toBe(200);
  expect(result.type).toBe("application/json");
  if (result.body.length > 0){
    id = result.body[0]._id.toString();
  }
  });

  test("Deve retornar 200 e um JSON para GET /historico/id", async () => {
    const result = await request
    .get(`/historico/${id}`)
  expect(result.status).toBe(200);
  expect(result.type).toBe("application/json");
  });

  test("Deve retornar 404 e um JSON para GET /historico/id", async () => {
    const result = await request
    .get(`/historico/id`)
  expect(result.status).toBe(404);
  expect(result.type).toBe("application/json");
  });

  test("Deve retornar 200 para PUT /historico/id", async () => {
    const result = await request
    .put(`/historico/${id}`)
    .send({});

  expect(result.status).toBe(200);
  expect(result.type).toBe("application/json");
  });

  test("Deve retornar 404 para PUT /historico/id", async () => {
    const result = await request
    .put(`/historico/id`)
  expect(result.status).toBe(404);
  expect(result.type).toBe("application/json");
  });

  test("Deve retornar 422 e um JSON para PUT /historico/id", async () => {
    const result = await request
    .put(`/historico/${id}`)
    .send({});
  expect(result.status).toBe(422);
  expect(result.type).toBe("application/json");
});

  test("Deve retornar 204 e um JSON para DELETE /historico/id", async () => {
    const result = await request
    .delete(`/historico/${id}`)
  expect(result.status).toBe(204);
  expect(result.type).toBe("");
  });
  
  test("Deve retornar 404 e um JSON para DELETE /historico/id", async () => {
    const result = await request
    .delete(`/historico/id`)
  expect(result.status).toBe(404);
  expect(result.type).toBe("application/json");
  });

});