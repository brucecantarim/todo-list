import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import supertest from 'supertest';
import { server, closeServer } from '../api/server.ts';

describe('API tests', () => {
  let request: any;

  beforeAll(() => {
    request = supertest(server); // Start the server
  });

  afterAll(() => {
    // closeServer(); // Close the server
  });

  it('should retrieve all todos', async () => {
    const response = await request.get('/api/todos');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  it('should retrieve a specific todo', async () => {
    const response = await request.get('/api/todos/1');
    expect(response.status).toBe(200);
    expect(typeof response.body === 'object').toBe(true);
  });

  it('should create a new todo', async () => {
    const response = await request
      .post('/api/todos')
      .send({ task: 'New Todo' });
    expect(response.status).toBe(200);
    expect(typeof response.body === 'object').toBe(true);
    expect(response.body.id).toBeDefined();
    expect(response.body.task).toBe('New Todo');
  });

  it('should update a todo', async () => {
    const response = await request
      .put('/api/todos/1')
      .send({ isCompleted: true });
    expect(response.status).toBe(200);
    expect(typeof response.body === 'object').toBe(true);
    expect(response.body.success).toBe(true);
  });

  it('should delete all todos', async () => {
    const response = await request.delete('/api/todos');
    expect(response.status).toBe(200);
    expect(typeof response.body === 'object').toBe(true);
    expect(response.body.success).toBe(true);
  });

  it('should delete a specific todo', async () => {
    const response = await request.delete('/api/todos/1');
    expect(response.status).toBe(200);
    expect(typeof response.body === 'object').toBe(true);
    expect(response.body.id).toBe(1);
  });
});

