import { test, expect } from '@playwright/test';

test.describe('Seed test', () => {
  test('opens the home page and checks the app is ready', async ({ page }) => {
    await page.goto('https://practicesoftwaretesting.com/');

    await expect(page).toHaveTitle(/Practice Software Testing/i);
    await expect(page.locator('body')).toContainText(/Practice Black Box Testing/i);
    await expect(page.locator('body')).toContainText(/Sign in/i);
  });
});
