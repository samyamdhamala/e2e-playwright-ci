# E2E Playwright CI/CD Pipeline

End-to-end tests for [saucedemo.com](https://www.saucedemo.com) with automated CI/CD using GitHub Actions and Allure reporting. Tests run across **Chromium, Firefox, and WebKit** on every push.

## Live Report

[View Latest Test Report](https://samyamdhamala.github.io/e2e-playwright-ci/)

## Tech Stack

| Tool | Purpose |
|------|---------|
| [Playwright](https://playwright.dev) | E2E test framework + cross-browser engine |
| [GitHub Actions](https://docs.github.com/en/actions) | CI/CD pipeline |
| [Allure Report](https://allurereport.org) | Visual test reporting |
| [GitHub Pages](https://pages.github.com) | Report hosting |

## Test Cases

| ID | Test | Description |
|----|------|-------------|
| TC01 | Successful login | Valid credentials redirect to products page |
| TC02 | Failed login | Wrong password shows error message |
| TC03 | Add to cart | Product appears in cart with correct count |
| TC04 | Sort price low→high | Products sort correctly ascending |
| TC05 | Full checkout | Complete purchase flow from cart to confirmation |
| TC06 | Logout | Menu logout redirects back to login page |
| TC07 | Remove from cart | Removing item clears cart badge |
| TC08 | Sort price high→low | Products sort correctly descending |
| TC09 | Sort A→Z | Products sort alphabetically ascending |
| TC10 | Sort Z→A | Products sort alphabetically descending |
| TC11 | Product detail page | Clicking product shows correct name, price, description |

Each test runs on **3 browser engines = 33 total test executions** per CI run.

## Cross-Browser Execution Evidence

Local run output (33 tests across Chromium, Firefox, WebKit):

```
Running 33 tests using 8 workers

  [chromium] › TC01 - Successful login with valid credentials
  [chromium] › TC02 - Login fails with wrong password shows error
  [chromium] › TC03 - Add a product to the cart
  [chromium] › TC04 - Sort products by price low to high
  [chromium] › TC05 - Complete full checkout flow
  [chromium] › TC06 - Logout redirects to login page
  [chromium] › TC07 - Remove item from cart clears cart badge
  [chromium] › TC08 - Sort products by price high to low
  [chromium] › TC09 - Sort products alphabetically A to Z
  [chromium] › TC10 - Sort products alphabetically Z to A
  [chromium] › TC11 - Product detail page shows correct info
  [firefox]  › TC01 - Successful login with valid credentials
  [firefox]  › TC02 - Login fails with wrong password shows error
  [firefox]  › TC03 - Add a product to the cart
  [firefox]  › TC04 - Sort products by price low to high
  [firefox]  › TC05 - Complete full checkout flow
  [firefox]  › TC06 - Logout redirects to login page
  [firefox]  › TC07 - Remove item from cart clears cart badge
  [firefox]  › TC08 - Sort products by price high to low
  [firefox]  › TC09 - Sort products alphabetically A to Z
  [firefox]  › TC10 - Sort products alphabetically Z to A
  [firefox]  › TC11 - Product detail page shows correct info
  [webkit]   › TC01 - Successful login with valid credentials
  [webkit]   › TC02 - Login fails with wrong password shows error
  [webkit]   › TC03 - Add a product to the cart
  [webkit]   › TC04 - Sort products by price low to high
  [webkit]   › TC05 - Complete full checkout flow
  [webkit]   › TC06 - Logout redirects to login page
  [webkit]   › TC07 - Remove item from cart clears cart badge
  [webkit]   › TC08 - Sort products by price high to low
  [webkit]   › TC09 - Sort products alphabetically A to Z
  [webkit]   › TC10 - Sort products alphabetically Z to A
  [webkit]   › TC11 - Product detail page shows correct info

  33 passed (33.0s)
```

## Project Structure

```
├── tests/
│   └── saucedemo.spec.ts          # 11 E2E test cases
├── .github/
│   └── workflows/
│       └── playwright.yml         # CI/CD pipeline (all 3 browsers)
├── playwright.config.ts           # Playwright + Allure reporter config
└── package.json
```

## Setup & Run Locally

```bash
# Install dependencies
npm install

# Install all browsers
npx playwright install

# Run all tests on all browsers (33 tests)
npm test

# Run on a specific browser
npm run test:chromium
npm run test:firefox
npm run test:webkit

# Watch tests run in the browser (headed)
npm run test:headed
npm run test:headed:firefox
npm run test:headed:webkit

# Slow mode — 800ms per action, easy to follow
npm run test:slow
npm run test:slow:firefox
npm run test:slow:webkit

# Debug mode — Playwright Inspector, step through one action at a time
npm run test:debug
npm run test:debug:firefox
npm run test:debug:webkit

# Generate and open Allure report locally
npm run report
```

## How the CI/CD Pipeline Works

1. Push code to `main`
2. GitHub Actions installs Node, Playwright, and all 3 browsers
3. Runs all 11 tests × 3 browsers = 33 total test executions
4. Generates Allure HTML report
5. Deploys report to GitHub Pages automatically
6. Pipeline status = green if all 33 pass, red if any fail
