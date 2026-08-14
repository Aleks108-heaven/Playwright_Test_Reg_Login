import { Page, expect } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async login(email: string, password: string) {
    await this.page.locator('[data-test="email"]').fill(email);
    await this.page.locator('[data-test="password"]').fill(password);
    await this.page.locator('[data-test="login-submit"]').click();
  }

  async expectAccountPage() {
    await expect(this.page).toHaveURL(/\/account(?:\/|$)/, { timeout: 15000 });
  }

  async expectLoginPage() {
    await expect(this.page).toHaveURL(/\/auth\/login/, { timeout: 15000 });
  }
}
