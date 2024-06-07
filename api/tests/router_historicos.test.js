const supertest = require("supertest");

const app = require("../app");

const request = supertest(app);

let id = null;

describe("API Historico de Fazendas", function () {
   test("Deve retornar 201 e um JSON para POST /historicos", async () => {
     const result = await request
     .post("/historicos")
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

  test("Deve retornar 422 e um JSON do historico criado para POST /historicos", async () => {
    const result = await request
    .post("/historicos")
    .send({});
  expect(result.status).toBe(422);
  expect(result.type).toBe("application/json");
  });

  test("Deve retornar 200 e um JSON array para GET /historicos", async () => {
    const result = await request
    .get("/historicos")
  expect(result.status).toBe(200);
  expect(result.type).toBe("application/json");
  if (result.body.length > 0){
    id = result.body[0]._id.toString();
  }
  });

  test("Deve retornar 200 e um JSON para GET /historicos/id", async () => {
    const result = await request
    .get(`/historicos/${id}`)
  expect(result.status).toBe(200);
  expect(result.type).toBe("application/json");
  });

  test("Deve retornar 404 e um JSON para GET /historicos/id", async () => {
    const result = await request
    .get(`/historicos/id`)
  expect(result.status).toBe(404);
  expect(result.type).toBe("application/json");
  });

  test("Deve retornar 200 para PUT /historicos/id", async () => {
    const result = await request
    .put(`/historicos/${id}`)
    .send({nome: "Rancho da Serra", 
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

  expect(result.status).toBe(200);
  expect(result.type).toBe("application/json");
  });

  test("Deve retornar 404 para PUT /historicos/id", async () => {
    const result = await request
    .put(`/historicos/id`)
  expect(result.status).toBe(404);
  expect(result.type).toBe("application/json");
  });

  test("Deve retornar 422 e um JSON para PUT /historicos/id", async () => {
    const result = await request
    .put(`/historicos/${id}`)
    .send({});
  expect(result.status).toBe(422);
  expect(result.type).toBe("application/json");
});

  test("Deve retornar 204 e um JSON para DELETE /historicos/id", async () => {
    const result = await request
    .delete(`/historicos/${id}`)
  expect(result.status).toBe(204);
  expect(result.type).toBe("");
  });
  
  test("Deve retornar 404 e um JSON para DELETE /historicos/id", async () => {
    const result = await request
    .delete(`/historicos/id`)
  expect(result.status).toBe(404);
  expect(result.type).toBe("application/json");
  });

});