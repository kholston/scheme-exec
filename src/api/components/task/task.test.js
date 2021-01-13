import app from '../../app';
import { connectDB, closeDB, clearDB } from '../../config/mongoConfigTesting';
import supertest from 'supertest';

const request = supertest(app);

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
  it('POST: Create a task', () => {
    expect(1).toBe(1);
  });

  it('GET: Read a task', () => {
    expect(1).toBe(1);
  });

  it('GET: Read all tasks', () => {
    expect(1).toBe(1);
  });

  it('POST: Update a task', () => {
    expect(1).toBe(1);
  });

  it('DELETE: Remove a task', () => {
    expect(1).toBe(1);
  });
});
