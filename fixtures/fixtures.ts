import { test as base, expect } from '@playwright/test';

type UserData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
};

export const test = base.extend<{
  validUser: UserData;
  invalidUser: UserData;
  newUser: UserData;
}>({
  validUser: async ({}, use) => {
    await use({
      firstName: 'John',
      lastName: 'Doe',
      email: 'customer@practicesoftwaretesting.com',
      password: 'welcome01',
      phone: '5551234567',
    });
  },

  invalidUser: async ({}, use) => {
    await use({
      firstName: 'Wrong',
      lastName: 'User',
      email: 'wrong@example.com',
      password: 'WrongPassword@123',
      phone: '5550000000',
    });
  },

  newUser: async ({}, use) => {
    const email = `user${Date.now()}@example.com`;

    await use({
      firstName: 'Jane',
      lastName: 'Smith',
      email,
      password: 'NewUser@2024Secure',
      phone: '5559876543',
    });
  },
});

export { expect };