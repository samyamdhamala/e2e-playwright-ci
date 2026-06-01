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

  test('TC06 - Logout redirects to login page', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.fill('#user-name', VALID_USER);
    await page.fill('#password', VALID_PASS);
    await page.click('#login-button');

    await page.click('#react-burger-menu-btn');
    await page.click('#logout_sidebar_link');

    await expect(page).toHaveURL(BASE_URL + '/');
    await expect(page.locator('#login-button')).toBeVisible();
  });

  test('TC07 - Remove item from cart clears cart badge', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.fill('#user-name', VALID_USER);
    await page.fill('#password', VALID_PASS);
    await page.click('#login-button');

    await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');

    await page.click('[data-test="remove-sauce-labs-backpack"]');

    await expect(page.locator('.shopping_cart_badge')).not.toBeVisible();
  });

  test('TC08 - Sort products by price high to low', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.fill('#user-name', VALID_USER);
    await page.fill('#password', VALID_PASS);
    await page.click('#login-button');

    await page.selectOption('[data-test="product-sort-container"]', 'hilo');

    const prices = await page.locator('.inventory_item_price').allTextContents();
    const numericPrices = prices.map(p => parseFloat(p.replace('$', '')));

    for (let i = 0; i < numericPrices.length - 1; i++) {
      expect(numericPrices[i]).toBeGreaterThanOrEqual(numericPrices[i + 1]);
    }
  });

  test('TC09 - Sort products alphabetically A to Z', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.fill('#user-name', VALID_USER);
    await page.fill('#password', VALID_PASS);
    await page.click('#login-button');

    await page.selectOption('[data-test="product-sort-container"]', 'az');

    const names = await page.locator('.inventory_item_name').allTextContents();
    const sorted = [...names].sort((a, b) => a.localeCompare(b));

    expect(names).toEqual(sorted);
  });

  test('TC10 - Sort products alphabetically Z to A', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.fill('#user-name', VALID_USER);
    await page.fill('#password', VALID_PASS);
    await page.click('#login-button');

    await page.selectOption('[data-test="product-sort-container"]', 'za');

    const names = await page.locator('.inventory_item_name').allTextContents();
    const sorted = [...names].sort((a, b) => b.localeCompare(a));

    expect(names).toEqual(sorted);
  });

  test('TC11 - Product detail page shows correct info', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.fill('#user-name', VALID_USER);
    await page.fill('#password', VALID_PASS);
    await page.click('#login-button');

    await page.click('.inventory_item_name >> nth=0');

    await expect(page).toHaveURL(/inventory-item\.html/);
    await expect(page.locator('.inventory_details_name')).toBeVisible();
    await expect(page.locator('.inventory_details_price')).toBeVisible();
    await expect(page.locator('.inventory_details_desc')).toBeVisible();
    await expect(page.locator('[data-test^="add-to-cart"]')).toBeVisible();
  });

});
