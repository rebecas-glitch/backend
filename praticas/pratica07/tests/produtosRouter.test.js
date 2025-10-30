const supertest = require('supertest');
const app = require('../app');

const request = supertest(app);
let id;

describe('/produtos', () => {
  it('POST /produtos - cria produto', async () => {
    const res = await request.post('/produtos').send({ nome: 'Laranja', preco: 10 });
    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty('_id');
    expect(res.body.nome).toBe('Laranja');
    expect(res.body.preco).toBe(10);
    id = res.body._id;
  });

  it('POST /produtos sem dados retorna 422', async () => {
    const res = await request.post('/produtos').send({});
    expect(res.status).toBe(422);
    expect(res.body.msg).toBe('Nome e preço do produto são obrigatórios');
  });

  it('GET /produtos - lista produtos', async () => {
    const res = await request.get('/produtos');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('GET /produtos/:id - retorna produto', async () => {
    const res = await request.get(`/produtos/${id}`);
    expect(res.status).toBe(200);
    expect(res.body.nome).toBe('Laranja');
  });

  it('PUT /produtos/:id - atualiza produto', async () => {
    const res = await request.put(`/produtos/${id}`).send({ nome: 'Laranja Pera', preco: 18 });
    expect(res.status).toBe(200);
    expect(res.body.nome).toBe('Laranja Pera');
    expect(res.body.preco).toBe(18);
  });

  it('DELETE /produtos/:id - remove produto', async () => {
    const res = await request.delete(`/produtos/${id}`);
    expect(res.status).toBe(204);
  });
});
