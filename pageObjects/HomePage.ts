import { Page } from '@playwright/test';

export class HomePage {
  constructor(private page: Page) {}

  async open() {
    await this.page.goto('https://practicesoftwaretesting.com/');
  }

  async openLogin() {
    await this.page.locator('[data-test="nav-sign-in"]').click();
  }

  async openRegister() {
    await this.page.locator('[data-test="nav-sign-in"]').click();
    await this.page.locator('[data-test="register-link"]').click();
  }
}
