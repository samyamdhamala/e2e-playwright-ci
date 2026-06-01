# E2E Playwright CI/CD Pipeline

End-to-end tests for [saucedemo.com](https://www.saucedemo.com) with automated CI/CD using GitHub Actions and Allure reporting.

## What This Project Does

- Runs 5 automated E2E tests against a public demo e-commerce site
- Triggers automatically on every push to `main`
- Generates a visual Allure test report
- Publishes the report to GitHub Pages after every run

## Live Report

[View Latest Test Report](https://samyamdhamala.github.io/e2e-playwright-ci/)

## Tech Stack

| Tool | Purpose |
|------|---------|
| [Playwright](https://playwright.dev) | E2E test framework |
| [GitHub Actions](https://docs.github.com/en/actions) | CI/CD pipeline |
| [Allure Report](https://allurereport.org) | Visual test reporting |
| [GitHub Pages](https://pages.github.com) | Report hosting |

## Test Cases

| ID | Test | Description |
|----|------|-------------|
| TC01 | Successful login | Valid credentials redirect to products page |
| TC02 | Failed login | Wrong password shows error message |
| TC03 | Add to cart | Product appears in cart with correct count |
| TC04 | Sort by price | Products sort correctly from low to high |
| TC05 | Full checkout | Complete purchase flow from cart to confirmation |

## Project Structure

```
├── tests/
│   └── saucedemo.spec.ts      # All 5 E2E test cases
├── .github/
│   └── workflows/
│       └── playwright.yml     # CI/CD pipeline config
├── playwright.config.ts       # Playwright + Allure reporter config
└── package.json
```

## Run Tests Locally

```bash
# Install dependencies
npm install

# Install browsers
npx playwright install chromium

# Run all tests
npx playwright test --project=chromium

# Generate and open Allure report
npx allure generate allure-results --clean -o allure-report
npx allure open allure-report
```

## How the Pipeline Works

1. Push code to `main`
2. GitHub Actions installs Node, Playwright, and browsers
3. Runs all 5 tests on Chromium
4. Generates Allure HTML report
5. Deploys report to GitHub Pages
6. Pipeline status = green if all pass, red if any fail
