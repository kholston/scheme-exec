import supertest from 'supertest';
import app from '../../app';
import { connectDB, closeDB } from '../../config/mongoConfigTesting';

const request = supertest;

describe('Initial Jest Tests', () => {
  it('Testing Jest in: Task', () => {
    expect(1).toBe(1);
  });
});

beforeAll(async () => {
  await connectDB();
});

afterAll(async () => {
  await closeDB();
});

describe('Testing Task Routes', () => {
  it('POST: Create a task', async () => {
    const response = await request(app).post('/tasks').send({
      test: 'testing create',
    });

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ currentRoute: 'task create' });
  });

  it('GET: Read a task', async () => {
    const response = await request(app).get('/tasks/taskId');

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ currentRoute: 'task get' });
  });

  it('GET: Read all tasks', async () => {
    const response = await request(app).get('/tasks');

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ currentRoute: 'task get all' });
  });

  it('PUT: Update a task', async () => {
    const response = await request(app)
      .put('/tasks/taskId')
      .send({ test: 'testing update' });

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ currentRoute: 'task update' });
  });

  it('DELETE: Remove a task', async () => {
    const response = await request(app).delete('/tasks/taskId');

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ currentRoute: 'task delete' });
  });
});
