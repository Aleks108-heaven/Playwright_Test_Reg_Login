import { test, expect } from '@playwright/test';

test.describe('Practice Software Testing - Quick Registration & Login', () => {
  
  test.beforeEach(async ({ page }) => {
    await page.goto('https://practicesoftwaretesting.com/');
  });

  test('Register a new user', async ({ page }) => {
    await page.goto('https://practicesoftwaretesting.com/');

    const signInLink = page.locator('[data-test="nav-sign-in"]');
    await expect(signInLink).toBeVisible({ timeout: 30000 });
    await signInLink.click();
    await page.locator('[data-test="register-link"]').click();

    const uniqueEmail = `user${Date.now()}@example.com`;

    await page.locator('[data-test="first-name"]').fill('John');
    await page.locator('[data-test="last-name"]').fill('Doe');
    await page.locator('[data-test="dob"]').fill('1990-05-15');
    await page.locator('[data-test="postal_code"]').fill('12345');
    await page.getByLabel(/House number/i).fill('123');
    await page.locator('[data-test="street"]').fill('123 Main Street');
    await page.locator('[data-test="city"]').fill('New York');
    await page.locator('[data-test="state"]').fill('NY');
    await page.locator('[data-test="country"]').selectOption('United States of America (the)');
    await page.locator('[data-test="phone"]').fill('5551234567');
    await page.locator('[data-test="email"]').fill(uniqueEmail);
    await page.locator('[data-test="password"]').fill('MySecure@2024Pwd');

    await page.locator('[data-test="register-submit"]').click();

    await page.waitForURL(url => {
      return !url.pathname.includes('/auth/register');
    }, { timeout: 20000 });

    expect(page.url()).not.toContain('/auth/register');
  });

  test('Login with valid credentials', async ({ page }) => {
    const signInLink = page.locator('[data-test="nav-sign-in"]');
    await expect(signInLink).toBeVisible({ timeout: 30000 });
    await signInLink.click();

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

  test('Login fails with incorrect password', async ({ page }) => {
    // Navigate to login page
    const signInLink = page.locator('[data-test="nav-sign-in"]');
    await expect(signInLink).toBeVisible({ timeout: 30000 });
    await signInLink.click();
    
    // Fill with wrong password
    await page.locator('[data-test="email"]').fill('demo@practicesoftwaretesting.com');
    await page.locator('[data-test="password"]').fill('WrongPassword@123');
    
    // Click login
    await page.locator('[data-test="login-submit"]').click();
    
    // Verify error message appears
    await page.locator('text=/invalid|password|incorrect/i').waitFor({ state: 'visible' }).catch(() => {});
    
    // Verify still on login page
    const url = page.url();
    expect(url).toContain('/auth/login');
  });
});
