const request = require("supertest");
const app = require("../index");

let token;

test("GET /produtos sem token retorna 401", async () => {
  const res = await request(app).get("/produtos");
  expect(res.statusCode).toBe(401);
  expect(res.body.msg).toBe("Não autorizado");
});

test("POST /usuarios/login retorna token", async () => {
  const res = await request(app)
    .post("/usuarios/login")
    .send({ usuario: "email@exemplo.com", senha: "abcd1234" });

  expect(res.statusCode).toBe(200);
  expect(res.body.token).toBeDefined();
  token = res.body.token;
});

test("GET /produtos com token retorna 200", async () => {
  const res = await request(app)
    .get("/produtos")
    .set("authorization", token);

  expect(res.statusCode).toBe(200);
  expect(res.body).toEqual([]);
});

test("POST /usuarios/renovar retorna novo token", async () => {
  const res = await request(app)
    .post("/usuarios/renovar")
    .set("authorization", token);

  expect(res.statusCode).toBe(200);
  expect(res.body.token).toBeDefined();
  token = res.body.token;
});

test("GET /produtos com novo token retorna 200", async () => {
  const res = await request(app)
    .get("/produtos")
    .set("authorization", token);

  expect(res.statusCode).toBe(200);
  expect(res.body).toEqual([]);
});
