import { test } from '../fixtures/test-options';
import { HomePage } from '../pageObjects/HomePage';
import { CartPage } from '../pageObjects/CartPage';

test.describe('Cart flow', () => {
  test('open cart page', async ({ page }) => {
    const homePage = new HomePage(page);
    const cartPage = new CartPage(page);

    await homePage.open();
    await cartPage.openCart();
    await cartPage.expectCartVisible();
  });
});
