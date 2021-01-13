import app from '../../app';
import { connectDB, closeDB, clearDB } from '../../config/mongoConfigTesting';
import supertest from 'supertest';

const request = supertest(app);

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
  it('POST: Create a project', () => {
    expect(1).toBe(1);
  });

  it('GET: Read a project', () => {
    expect(1).toBe(1);
  });

  it('GET: Read all projects', () => {
    expect(1).toBe(1);
  });

  it('POST: Update a project', () => {
    expect(1).toBe(1);
  });

  it('DELETE: Remove a project', () => {
    expect(1).toBe(1);
  });
});
