# Playwright Auth Practice Project

![Playwright](https://img.shields.io/badge/Playwright-Regression%20Testing-2E6DEB?logo=playwright&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-18%2B-339933?logo=node.js&logoColor=white)

A Playwright automation project for practicing and validating user registration and login flows on the Practice Software Testing website.

## Overview

This project exercises real browser-based authentication scenarios against:

- <https://practicesoftwaretesting.com/>

It is designed to help improve skills in:

- browser automation with Playwright
- UI interaction and form handling
- validation logic and assertions
- login and registration workflow testing
- end-to-end test planning and execution

## Project Status

This project is well suited for:

- learning Playwright
- practicing automation flows
- demoing end-to-end testing concepts
- exploring real-world UI validation scenarios

It is not yet considered:

- fully reliable for CI automation
- production-ready for stable pipeline execution
- a hardened regression suite for continuous deployment workflows

> In short, this is a strong practice and learning project, but it still needs further hardening before it is dependable for repeatable CI usage.

## Tech Stack

- Playwright
- TypeScript
- Node.js
- HTML test reporting

## Project Structure

- `tests/` — Playwright test files
- `e2e/` — additional end-to-end scenarios
- `playwright.config.ts` — browser and reporter configuration
- `TEST_PLAN.md` — detailed test case planning
- `playwright-report/` — generated HTML report
- `test-results/` — execution artifacts
- `package.json` — dependencies and scripts

## Prerequisites

Make sure the following are installed:

- Node.js
- npm
- Playwright browser dependencies

## Installation

```bash
npm install
npx playwright install
```

## Running Tests

Run the full suite:

```bash
npx playwright test
```

Run a single file:

```bash
npx playwright test tests/login.spec.ts
npx playwright test tests/api.spec.ts
npx playwright test tests/seed.spec.ts
```

Open HTML report:

```bash
npx playwright show-report
```

## Current Project Structure

```txt
fixtures/
  test-options.ts
pageObjects/
  HomePage.ts
  LoginPage.ts
  RegisterPage.ts
  CartPage.ts
tests/
  login.spec.ts
  registration.spec.ts
  cart.spec.ts
  api.spec.ts
  seed.spec.ts
playwright.config.ts
TEST_PLAN.md
package.json
```

## Fixtures

The project uses `fixtures/test-options.ts` to centralize reusable user test data.

Included fixtures:

- `validUser`
- `invalidUser`
- `newUser`

This reduces duplication across login and registration tests and keeps test data consistent.

## Page Objects

The UI logic is separated into page object classes under `pageObjects/`:

- `HomePage.ts` — homepage navigation and shared entry points
- `LoginPage.ts` — login form interactions and assertions
- `RegisterPage.ts` — registration form flow
- `CartPage.ts` — cart-related navigation and checks

This keeps the tests readable and easier to maintain.

## Test Coverage

### UI tests

- Login with valid credentials
- Login with invalid password
- Registration with new user data
- Cart page flow
- Seed smoke test

### API tests

- JSONPlaceholder GET /posts/1 returns a valid JSON object
- JSONPlaceholder GET /users returns a list of users
- Negative API test for a missing resource returns 404
- Compatibility check for Practice Software Testing route returning HTML instead of JSON

## Seed Test

The `seed.spec.ts` test acts as a smoke test to confirm that the app is reachable and the homepage loads correctly.

## Notes

This project is a good learning and practice setup for Playwright, but it is not yet hardened for full CI reliability. It is suitable for:

- learning automation patterns
- practicing UI and API testing
- building structured test solutions

It still needs more stability improvements for production-style CI usage, such as:

- fuller retry and failure handling
- environment-based configuration
- cleaner selectors and more resilient assertions
- better API validation for non-JSON endpoints

## Project Status

This project is suitable for:

- learning Playwright
- building practice-based automation
- exploring browser and API testing patterns

It is not yet fully ready for:

- production-grade CI execution
- stable enterprise automation pipelines
- long-term regression use without additional hardening

> In short, this is a solid learning and demonstration project, but it is not yet a fully reliable CI-ready automation suite.

## License

This project is intended for educational and testing purposes.
