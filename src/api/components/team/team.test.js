import supertest from 'supertest';
import app from '../../app';
import { connectDB, closeDB } from '../../config/mongoConfigTesting';

const request = supertest;

describe('Initial Jest Tests', () => {
  it('Testing Jest in: Team', () => {
    expect(1).toBe(1);
  });
});

beforeAll(async () => {
  await connectDB();
});

afterAll(async () => {
  await closeDB();
});

describe('Testing Team Routes', () => {
  it('POST: Create a team', async () => {
    const response = await request(app).post('/teams').send({
      test: 'testing create',
    });

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ currentRoute: 'team create' });
  });

  it('GET: Read a team', async () => {
    const response = await request(app).get('/teams/teamId');

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ currentRoute: 'team get' });
  });

  it('GET: Read all teams', async () => {
    const response = await request(app).get('/teams');

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ currentRoute: 'team get all' });
  });

  it('PUT: Update a team', async () => {
    const response = await request(app)
      .put('/teams/teamId')
      .send({ test: 'testing update' });

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ currentRoute: 'team update' });
  });

  it('DELETE: Remove a team', async () => {
    const response = await request(app).delete('/teams/teamId');

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ currentRoute: 'team delete' });
  });
});
