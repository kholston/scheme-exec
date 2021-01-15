import supertest from 'supertest';
import app from '../../app';
import { connectDB, closeDB } from '../../config/mongoConfigTesting';

const request = supertest;

describe('Initial Jest Tests', () => {
  it('Testing Jest in: User', () => {
    expect(1).toBe(1);
  });
});

beforeAll(async () => {
  await connectDB();
});

afterAll(async () => {
  await closeDB();
});

describe('Testing User Routes', () => {
  it('POST: Create a user', async () => {
    const response = await request(app).post('/users').send({
      test: 'testing create',
    });

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ currentRoute: 'user create' });
  });

  it('GET: Read a user', async () => {
    const response = await request(app).get('/users/userId');

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ currentRoute: 'user get' });
  });

  it('GET: Read all users', async () => {
    const response = await request(app).get('/users');

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ currentRoute: 'user get all' });
  });

  it('PUT: Update a user', async () => {
    const response = await request(app)
      .put('/users/userId')
      .send({ test: 'testing update' });

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ currentRoute: 'user update' });
  });

  it('DELETE: Remove a user', async () => {
    const response = await request(app).delete('/users/userId');

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ currentRoute: 'user delete' });
  });
});
