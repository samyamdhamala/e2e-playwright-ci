// E2E tests for saucedemo.com - trigger CI run
import { test, expect } from '@playwright/test';

const BASE_URL = 'https://www.saucedemo.com';
const VALID_USER = 'standard_user';
const VALID_PASS = 'secret_sauce';

test.describe('SauceDemo E-Commerce Tests', () => {

  test('TC01 - Successful login with valid credentials', async ({ page }) => {
    await page.goto(BASE_URL);

    await page.fill('#user-name', VALID_USER);
    await page.fill('#password', VALID_PASS);
    await page.click('#login-button');

    await expect(page).toHaveURL(`${BASE_URL}/inventory.html`);
    await expect(page.locator('.title')).toHaveText('Products');
  });

  test('TC02 - Login fails with wrong password shows error', async ({ page }) => {
    await page.goto(BASE_URL);

    await page.fill('#user-name', VALID_USER);
    await page.fill('#password', 'wrong_password');
    await page.click('#login-button');

    const errorMessage = page.locator('[data-test="error"]');
    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toContainText('Username and password do not match');
  });

  test('TC03 - Add a product to the cart', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.fill('#user-name', VALID_USER);
    await page.fill('#password', VALID_PASS);
    await page.click('#login-button');

    await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');

    const cartBadge = page.locator('.shopping_cart_badge');
    await expect(cartBadge).toHaveText('1');

    await page.click('.shopping_cart_link');
    await expect(page).toHaveURL(`${BASE_URL}/cart.html`);
    await expect(page.locator('.inventory_item_name')).toHaveText('Sauce Labs Backpack');
  });

  test('TC04 - Sort products by price low to high', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.fill('#user-name', VALID_USER);
    await page.fill('#password', VALID_PASS);
    await page.click('#login-button');

    await page.selectOption('[data-test="product-sort-container"]', 'lohi');

    const prices = await page.locator('.inventory_item_price').allTextContents();
    const numericPrices = prices.map(p => parseFloat(p.replace('$', '')));

    for (let i = 0; i < numericPrices.length - 1; i++) {
      expect(numericPrices[i]).toBeLessThanOrEqual(numericPrices[i + 1]);
    }
  });

  test('TC05 - Complete full checkout flow', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.fill('#user-name', VALID_USER);
    await page.fill('#password', VALID_PASS);
    await page.click('#login-button');

    await page.click('[data-test="add-to-cart-sauce-labs-bike-light"]');
    await page.click('.shopping_cart_link');
    await page.click('[data-test="checkout"]');

    await expect(page).toHaveURL(`${BASE_URL}/checkout-step-one.html`);
    await page.fill('[data-test="firstName"]', 'Test');
    await page.fill('[data-test="lastName"]', 'User');
    await page.fill('[data-test="postalCode"]', '12345');
    await page.click('[data-test="continue"]');

    await expect(page).toHaveURL(`${BASE_URL}/checkout-step-two.html`);
    await expect(page.locator('.summary_info')).toBeVisible();

    await page.click('[data-test="finish"]');
    await expect(page).toHaveURL(`${BASE_URL}/checkout-complete.html`);
    await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');
  });

});
