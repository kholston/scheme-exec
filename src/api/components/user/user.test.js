import app from '../../app';
import { connectDB, closeDB, clearDB } from '../../config/mongoConfigTesting';
import supertest from 'supertest';

const request = supertest(app);

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
  it('POST: Create a user', () => {
    expect(1).toBe(1);
  });

  it('GET: Read a user', () => {
    expect(1).toBe(1);
  });

  it('GET: Read all users', () => {
    expect(1).toBe(1);
  });

  it('POST: Update a user', () => {
    expect(1).toBe(1);
  });

  it('DELETE: Remove a user', () => {
    expect(1).toBe(1);
  });
});
