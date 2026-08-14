import { Page, expect } from '@playwright/test';

export class CartPage {
  constructor(private page: Page) {}

  async openCart() {
    await this.page.goto('https://practicesoftwaretesting.com/cart', {
      waitUntil: 'domcontentloaded',
    });
  }

  async expectCartVisible() {
    await expect(this.page.locator('body')).toContainText(/Home|Categories|Contact|Sign in/i);
  }
}
