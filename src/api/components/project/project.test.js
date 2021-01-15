import supertest from 'supertest';
import app from '../../app';
import { connectDB, closeDB } from '../../config/mongoConfigTesting';

const request = supertest;

const testProjects = [
  {
    name: 'Test Project 1',
    description: 'a project to test database',
    creator: 1,
    team: 1,
    tasks: [1, 2, 3, 4],
    status: 'Planning',
  },
  {
    name: 'Test Project 2',
    description: 'a project to test database',
    creator: 2,
    team: 1,
    status: 'In Progress',
  },
  {
    name: 'Test Project 3',
    description: 'a project to test database',
    creator: 3,
    team: 2,
    tasks: [5, 6, 7, 8],
    status: 'Archived',
  },
];

describe('Initial Jest Tests', () => {
  it('Testing Jest in: Project', () => {
    expect(1).toBe(1);
  });
});

beforeAll(async () => {
  await connectDB();
});

afterAll(async () => {
  await closeDB();
});

describe('Testing Project Routes', () => {
  it('POST: Create a project', async () => {
    const response = await request(app).post('/projects').send({
      test: 'testing create',
    });

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ currentRoute: 'project create' });
  });

  it('GET: Read a project', async () => {
    const response = await request(app).get('/projects/projectId');

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ currentRoute: 'project get' });
  });

  it('GET: Read all projects', async () => {
    const response = await request(app).get('/projects');

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ currentRoute: 'project get all' });
  });

  it('PUT: Update a project', async () => {
    const response = await request(app)
      .put('/projects/projectId')
      .send({ test: 'testing update' });

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ currentRoute: 'project update' });
  });

  it('DELETE: Remove a project', async () => {
    const response = await request(app).delete('/projects/projectId');

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ currentRoute: 'project delete' });
  });
});
