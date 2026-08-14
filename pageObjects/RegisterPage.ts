import { Page } from '@playwright/test';

export class RegisterPage {
  constructor(private page: Page) {}

  async open() {
    await this.page.locator('[data-test="nav-sign-in"]').click();
    await this.page.locator('[data-test="register-link"]').click();
  }

  async register(user: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phone: string;
  }) {
    await this.page.locator('[data-test="first-name"]').fill(user.firstName);
    await this.page.locator('[data-test="last-name"]').fill(user.lastName);
    await this.page.locator('[data-test="dob"]').fill('1990-05-15');
    await this.page.locator('[data-test="street"]').fill('123 Main Street');
    await this.page.locator('[data-test="postal_code"]').fill('12345');
    await this.page.getByLabel(/House number/i).fill('123');
    await this.page.locator('[data-test="city"]').fill('New York');
    await this.page.locator('[data-test="state"]').fill('NY');
    await this.page.locator('[data-test="country"]').selectOption(['United States of America (the)']);
    await this.page.locator('[data-test="phone"]').fill(user.phone);
    await this.page.locator('[data-test="email"]').fill(user.email);
    await this.page.locator('[data-test="password"]').fill(user.password);
    await this.page.locator('[data-test="register-submit"]').click();
  }
}
