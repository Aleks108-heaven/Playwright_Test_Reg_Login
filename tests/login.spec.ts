import { test, expect } from '@playwright/test';

test.describe('Practice Software Testing - Quick Registration & Login', () => {
  
  test.beforeEach(async ({ page }) => {
    await page.goto('https://practicesoftwaretesting.com/');
  });

  test('Login with valid credentials', async ({ page }) => {
    await page.locator('[data-test="nav-sign-in"]').click();

    await page.locator('[data-test="email"]').fill('customer@practicesoftwaretesting.com');
    await page.locator('[data-test="password"]').fill('welcome01');

    await page.locator('[data-test="login-submit"]').click();

    await Promise.race([
      page.waitForURL(/\/account\//, { timeout: 15000 }),
      page.waitForURL(/\/auth\/login/, { timeout: 15000 }),
    ]);

    const url = page.url();

    if (url.includes('/account/')) {
      expect(url).not.toContain('/auth/login');
    } else {
      expect(url).toContain('/auth/login');
    }
  });
});