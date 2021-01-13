import app from '../../app';
import supertest from 'supertest';

const request = supertest(app);

describe('Initial Jest Tests', () => {
  test('Testing Jest in: User', () => {
    expect(1).toBe(1);
  });
});
