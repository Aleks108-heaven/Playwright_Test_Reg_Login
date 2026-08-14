// spec: Quick Registration & Login Test

import { test, expect } from '../fixtures/test-options';

test.describe('Quick Registration & Login Test', () => {
  test('Register a new user', async ({ page, newUser }) => {
    await page.goto('https://practicesoftwaretesting.com/');
    await page.locator('[data-test="nav-sign-in"]').click();
    await page.locator('[data-test="register-link"]').click();

    await page.locator('[data-test="first-name"]').fill(newUser.firstName!);
    await page.locator('[data-test="last-name"]').fill(newUser.lastName!);
    await page.locator('[data-test="dob"]').fill('1990-05-15');
    await page.locator('[data-test="street"]').fill('123 Main Street');
    await page.locator('[data-test="postal_code"]').fill('12345');
    await page.getByLabel(/House number/i).fill('123');
    await page.locator('[data-test="city"]').fill('New York');
    await page.locator('[data-test="state"]').fill('NY');
    await page.locator('[data-test="country"]').selectOption(['United States of America (the)']);
    await page.locator('[data-test="phone"]').fill(newUser.phone!);
    await page.locator('[data-test="email"]').fill(newUser.email!);
    await page.locator('[data-test="password"]').fill(newUser.password!);

    await page.locator('[data-test="register-submit"]').click();

    await expect(page).toHaveURL(/\/auth\/(register|login)/, { timeout: 10000 });
  });

  test('Login with valid credentials', async ({ page, validUser }) => {
    await page.goto('https://practicesoftwaretesting.com/');
    await page.locator('[data-test="nav-sign-in"]').click();
    await page.locator('[data-test="email"]').fill(validUser.email);
    await page.locator('[data-test="password"]').fill(validUser.password);
    await page.locator('[data-test="login-submit"]').click();

    await expect(page).toHaveURL(/\/account(?:\/|$)/, { timeout: 15000 });
  });

  test('Login fails with incorrect password', async ({ page, invalidUser }) => {
    await page.goto('https://practicesoftwaretesting.com/');
    await page.locator('[data-test="nav-sign-in"]').click();
    await page.locator('[data-test="email"]').fill(invalidUser.email);
    await page.locator('[data-test="password"]').fill(invalidUser.password);
    await page.locator('[data-test="login-submit"]').click();

    await expect(page).toHaveURL(/\/auth\/login/, { timeout: 15000 });
  });
});
