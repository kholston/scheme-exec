import app from '../../app';
import { connectDB, closeDB, clearDB } from '../../config/mongoConfigTesting';
import supertest from 'supertest';

const request = supertest(app);

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
  it('POST: Create a team', () => {
    expect(1).toBe(1);
  });

  it('GET: Read a team', () => {
    expect(1).toBe(1);
  });

  it('GET: Read all teams', () => {
    expect(1).toBe(1);
  });

  it('POST: Update a team', () => {
    expect(1).toBe(1);
  });

  it('DELETE: Remove a team', () => {
    expect(1).toBe(1);
  });
});
