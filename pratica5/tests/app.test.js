const request = require("supertest");
const app = require("../app");

let tarefaId;

describe("API Tarefas", () => {
  it("GET /tarefas - Deve retornar 200 e JSON", async () => {
    const res = await request(app).get("/tarefas");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeInstanceOf(Array);
  });

  it("POST /tarefas - Deve criar uma tarefa", async () => {
    const res = await request(app)
      .post("/tarefas")
      .send({ nome: "Estudar Node", concluida: false });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty("id");
    tarefaId = res.body.id;
  });

  it("GET /tarefas/:id - Deve retornar a tarefa criada", async () => {
    const res = await request(app).get(`/tarefas/${tarefaId}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body.id).toEqual(tarefaId);
  });

  it("PUT /tarefas/:id - Deve atualizar a tarefa", async () => {
    const res = await request(app)
      .put(`/tarefas/${tarefaId}`)
      .send({ nome: "Estudar Node e Express", concluida: true });
    expect(res.statusCode).toEqual(200);
    expect(res.body.nome).toEqual("Estudar Node e Express");
  });

  it("DELETE /tarefas/:id - Deve remover a tarefa", async () => {
    const res = await request(app).delete(`/tarefas/${tarefaId}`);
    expect(res.statusCode).toEqual(204);
  });
});
