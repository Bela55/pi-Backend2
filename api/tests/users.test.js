const bcrypt = require("bcrypt");
const supertest = require("supertest");

const app = require("../app");

const request = supertest(app);

let id = null;
let token = null;

// String aleatório para ser adicionado no email, para garantir que será único e não falhar a validação

// Escrever função para gerar 6 caracteres aleatórios
function generateRandomString(length) {
  let result = "";
  let characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

let randomString = generateRandomString(6);

describe("API Biodigestor", () => {
  test("Listando os usuários em /users deve retornar 200 e um JSON", async () => {
    const result = await request.get("/users");
    expect(result.status).toBe(200);
    expect(result.type).toBe("application/json");
  }),
    test("Cadastrando um novo usuário em /users, deve retornar 201 e um JSON", async () => {
      const result = await request.post("/users").send({
        nome: "cris",
        email: `cris@email${randomString}.com`,
        senha: "123456",
      });

      id = result.body.data._id;
      expect(result.status).toBe(201);
      expect(result.type).toBe("application/json");
    }),
    test("No caso de email que já existe, deve retornar 409, que é conflict", async () => {
      const result = await request.post("/users").send({
        nome: "cris",
        email: `cris@email${randomString}.com`,
        senha: "123456",
      });
      expect(result.status).toBe(409);
      expect(result.type).toBe("application/json");
    }),
    test("Listando o usuário existente, retorno 200", async () => {
      const result = await request.get(`/users/${id}`);
      expect(result.status).toBe(200);
      expect(result.type).toBe("application/json");
    }),
    test("Atualizando um usuário existente, o retorno deve ser 200 e o dado deve ter sido alterado.", async () => {
      const result = await request.put(`/users/${id}`).send({
        nome: "cris-alterada",
        email: `cris@email${randomString}.com`,
        senha: "123456",
      });

      expect(result.status).toBe(200);
      expect(result.body.data.nome).toBe("CRIS-ALTERADA");
      expect(result.type).toBe("application/json");
    }),
    test("Testando login com credenciais inválidas, retorno deve ser 400", async () => {
      let result = await request.post("/auth/login", {
        email: `cris@email${randomString}.com`,
        senha: "12345",
      });
      expect(result.status).toBe(400);
      expect(result.type).toBe("application/json");
    }),
    test("Testando login com credenciais válidas, retorno deve ser 200", async () => {
      let result = await request.post("/auth/login").send({
        email: `cris@email${randomString}.com`,
        senha: "123456",
      });
      token = result.body.data;
      expect(result.status).toBe(200);
      expect(result.type).toBe("application/json");
    }),
    test("Acessando a área restrita, sem passar token, retorno deve ser 401", async () => {
      const result = await request.get("/admin");
      expect(result.status).toBe(401);
      expect(result.type).toBe("application/json");
    }),
    test("Acessando a área restrita, passando token pego no login, retorno deve ser 200", async () => {
      const result = await request.get("/admin").set("authorization", token);
      expect(result.status).toBe(200);
      expect(result.type).toBe("application/json");
    }),
    test("Excluindo um usuário existente, deve retornar 204", async () => {
      const result = await request.delete(`/users/${id}`);
      expect(result.status).toBe(204);
    });
});
