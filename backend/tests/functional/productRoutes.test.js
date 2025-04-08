const request = require('supertest');
const app = require('../../app');

describe('POST /api/products', () => {
  it('ajoute un produit valide', async () => {
    const res = await request(app).post('/api/products').send({
      name: "Stylo bleu",
      stock: 100
    });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("id");
    expect(res.body.name).toBe("Stylo bleu");
  });

  it('rejette un produit sans nom', async () => {
    const res = await request(app).post('/api/products').send({
      stock: 50
    });

    expect(res.statusCode).toBe(400);
    expect(res.body.error).toBe("Champs invalides");
  });

  it('rejette un stock négatif', async () => {
    const res = await request(app).post('/api/products').send({
      name: "Clé USB",
      stock: -10
    });

    expect(res.statusCode).toBe(400);
  });
});
