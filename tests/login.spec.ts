import { test } from '../fixtures/test-options';
import { HomePage } from '../pageObjects/HomePage';
import { LoginPage } from '../pageObjects/LoginPage';

test.describe('Login flow', () => {
  test('login with valid credentials', async ({ page, validUser }) => {
    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);

    await homePage.open();
    await homePage.openLogin();
    await loginPage.login(validUser.email, validUser.password);

    await loginPage.expectAccountPage();
  });

  test('login with invalid password', async ({ page, invalidUser }) => {
    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);

    await homePage.open();
    await homePage.openLogin();
    await loginPage.login(invalidUser.email, invalidUser.password);

    await loginPage.expectLoginPage();
  });
});
