const supertest = require("supertest");

const app = require("../app_Calculo");

const request = supertest(app);

let id = null;

describe("Calculo da Fazenda", function () {
  test("Deve retornar 201 e um JSON para POST /calculos", async () => {
    const result = await request
      .post("/calculos")
      .send({
        nome: "Fazenda Jasmim",
        valor: {
          volumeBiodigestor: "000 m2",
          alturaTotalBiodigestor: "000 m",
          diametroCamaraBiodigestor: "00 m",
          alturaCamaraBiodigestor: "00 m",
          diametroBiodigestor: "00 m",
          alturaGasometro: "00 m",
          comprimentoCanoGuia: "00 m",
          dimensoesTanquesCargaDescarga: "00 m",
          comprimentoCanoDescarga: "00 m",
          comprimentoCanoCarga: "00 m",
          volumeGasProduzidoBiodigestor: "00 m2"
        }
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