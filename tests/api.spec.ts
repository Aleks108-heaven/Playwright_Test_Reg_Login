import { test, expect } from '@playwright/test';

test.describe('API tests', () => {
  test('JSONPlaceholder GET /posts/1 returns a valid JSON object', async ({ request }) => {
    const response = await request.get('https://jsonplaceholder.typicode.com/posts/1');

    expect(response.status()).toBe(200);
    expect(response.headers()['content-type']).toContain('application/json');

    const body = await response.json();
    expect(body).toHaveProperty('id', 1);
    expect(body).toHaveProperty('userId');
    expect(body).toHaveProperty('title');
    expect(body).toHaveProperty('body');
  });

  test('JSONPlaceholder GET /users returns an array of users', async ({ request }) => {
    const response = await request.get('https://jsonplaceholder.typicode.com/users');

    expect(response.status()).toBe(200);
    expect(response.headers()['content-type']).toContain('application/json');

    const body = await response.json();
    expect(Array.isArray(body)).toBeTruthy();
    expect(body.length).toBeGreaterThan(0);
    expect(body[0]).toHaveProperty('id');
    expect(body[0]).toHaveProperty('name');
  });

  test('Negative API test: GET /posts/9999 returns 404 not found', async ({ request }) => {
    const response = await request.get('https://jsonplaceholder.typicode.com/posts/9999');

    expect(response.status()).toBe(404);
    expect(response.ok()).toBeFalsy();

    const body = await response.json();
    expect(body).toEqual({});
  });

  test('Practice Software Testing endpoints respond with HTML instead of JSON', async ({ request }) => {
    const response = await request.get('https://practicesoftwaretesting.com/api/products');

    expect(response.status()).toBe(200);

    const contentType = response.headers()['content-type'] || '';
    const text = await response.text();

    if (contentType.includes('application/json')) {
      const body = JSON.parse(text);
      expect(Array.isArray(body)).toBeTruthy();
    } else {
      expect(text).toContain('<');
      expect(text.toLowerCase()).toContain('html');
    }
  });
});
