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
