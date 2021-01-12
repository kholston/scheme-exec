import supertest from 'supertest';
import app from '../../server';

const request = supertest(app);

describe('Initial Jest Tests', () => {
  test('Testing Jest in: Team', () => {
    expect(1).toBe(1);
  });
});
