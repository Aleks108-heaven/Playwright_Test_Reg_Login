import { test } from '../fixtures/test-options';
import { HomePage } from '../pageObjects/HomePage';
import { RegisterPage } from '../pageObjects/RegisterPage';

test.describe('Registration flow', () => {
  test('register a new user', async ({ page, newUser }) => {
    const homePage = new HomePage(page);
    const registerPage = new RegisterPage(page);

    await homePage.open();
    await homePage.openRegister();
    await registerPage.register({
      firstName: newUser.firstName!,
      lastName: newUser.lastName!,
      email: newUser.email,
      password: newUser.password,
      phone: newUser.phone!,
    });
  });
});
