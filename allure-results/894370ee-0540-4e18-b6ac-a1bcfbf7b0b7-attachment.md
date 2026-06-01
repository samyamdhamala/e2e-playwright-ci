# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: saucedemo.spec.ts >> SauceDemo E-Commerce Tests >> TC07 - Remove item from cart clears cart badge
- Location: tests\saucedemo.spec.ts:102:7

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('[data-test="add-to-cart-sauce-labs-backpack"]')
    - locator resolved to <button id="add-to-cart-sauce-labs-backpack" name="add-to-cart-sauce-labs-backpack" data-test="add-to-cart-sauce-labs-backpack" class="btn btn_primary btn_small btn_inventory ">Add to cart</button>
  - attempting click action
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - performing click action

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]:
    - generic [ref=e5]:
      - generic [ref=e6]:
        - generic [ref=e7]:
          - button "Open Menu" [ref=e8] [cursor=pointer]
          - img "Open Menu" [ref=e9]
        - generic [ref=e11]: Swag Labs
      - generic [ref=e14]:
        - generic [ref=e15]: Products
        - generic [ref=e17] [cursor=pointer]:
          - generic [ref=e18]: Name (A to Z)
          - combobox [ref=e19]:
            - option "Name (A to Z)" [selected]
            - option "Name (Z to A)"
            - option "Price (low to high)"
            - option "Price (high to low)"
    - generic [ref=e23]:
      - generic [ref=e24]:
        - link "Sauce Labs Backpack" [ref=e26] [cursor=pointer]:
          - /url: "#"
          - img "Sauce Labs Backpack" [ref=e27]
        - generic [ref=e28]:
          - generic [ref=e29]:
            - link "Sauce Labs Backpack" [ref=e30] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e31]: Sauce Labs Backpack
            - generic [ref=e32]: carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.
          - generic [ref=e33]:
            - generic [ref=e34]: $29.99
            - button "Add to cart" [ref=e35] [cursor=pointer]
      - generic [ref=e36]:
        - link "Sauce Labs Bike Light" [ref=e38] [cursor=pointer]:
          - /url: "#"
          - img "Sauce Labs Bike Light" [ref=e39]
        - generic [ref=e40]:
          - generic [ref=e41]:
            - link "Sauce Labs Bike Light" [ref=e42] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e43]: Sauce Labs Bike Light
            - generic [ref=e44]: A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.
          - generic [ref=e45]:
            - generic [ref=e46]: $9.99
            - button "Add to cart" [ref=e47] [cursor=pointer]
      - generic [ref=e48]:
        - link "Sauce Labs Bolt T-Shirt" [ref=e50] [cursor=pointer]:
          - /url: "#"
          - img "Sauce Labs Bolt T-Shirt" [ref=e51]
        - generic [ref=e52]:
          - generic [ref=e53]:
            - link "Sauce Labs Bolt T-Shirt" [ref=e54] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e55]: Sauce Labs Bolt T-Shirt
            - generic [ref=e56]: Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.
          - generic [ref=e57]:
            - generic [ref=e58]: $15.99
            - button "Add to cart" [ref=e59] [cursor=pointer]
      - generic [ref=e60]:
        - link "Sauce Labs Fleece Jacket" [ref=e62] [cursor=pointer]:
          - /url: "#"
          - img "Sauce Labs Fleece Jacket" [ref=e63]
        - generic [ref=e64]:
          - generic [ref=e65]:
            - link "Sauce Labs Fleece Jacket" [ref=e66] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e67]: Sauce Labs Fleece Jacket
            - generic [ref=e68]: It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office.
          - generic [ref=e69]:
            - generic [ref=e70]: $49.99
            - button "Add to cart" [ref=e71] [cursor=pointer]
      - generic [ref=e72]:
        - link "Sauce Labs Onesie" [ref=e74] [cursor=pointer]:
          - /url: "#"
          - img "Sauce Labs Onesie" [ref=e75]
        - generic [ref=e76]:
          - generic [ref=e77]:
            - link "Sauce Labs Onesie" [ref=e78] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e79]: Sauce Labs Onesie
            - generic [ref=e80]: Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel.
          - generic [ref=e81]:
            - generic [ref=e82]: $7.99
            - button "Add to cart" [ref=e83] [cursor=pointer]
      - generic [ref=e84]:
        - link "Test.allTheThings() T-Shirt (Red)" [ref=e86] [cursor=pointer]:
          - /url: "#"
          - img "Test.allTheThings() T-Shirt (Red)" [ref=e87]
        - generic [ref=e88]:
          - generic [ref=e89]:
            - link "Test.allTheThings() T-Shirt (Red)" [ref=e90] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e91]: Test.allTheThings() T-Shirt (Red)
            - generic [ref=e92]: This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton.
          - generic [ref=e93]:
            - generic [ref=e94]: $15.99
            - button "Add to cart" [ref=e95] [cursor=pointer]
  - contentinfo [ref=e96]:
    - list [ref=e97]:
      - listitem [ref=e98]:
        - link "Twitter" [ref=e99] [cursor=pointer]:
          - /url: https://twitter.com/saucelabs
      - listitem [ref=e100]:
        - link "Facebook" [ref=e101] [cursor=pointer]:
          - /url: https://www.facebook.com/saucelabs
      - listitem [ref=e102]:
        - link "LinkedIn" [ref=e103] [cursor=pointer]:
          - /url: https://www.linkedin.com/company/sauce-labs/
    - generic [ref=e104]: © 2026 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy
```

# Test source

```ts
  8   | test.describe('SauceDemo E-Commerce Tests', () => {
  9   | 
  10  |   test('TC01 - Successful login with valid credentials', async ({ page }) => {
  11  |     await page.goto(BASE_URL);
  12  | 
  13  |     await page.fill('#user-name', VALID_USER);
  14  |     await page.fill('#password', VALID_PASS);
  15  |     await page.click('#login-button');
  16  | 
  17  |     await expect(page).toHaveURL(`${BASE_URL}/inventory.html`);
  18  |     await expect(page.locator('.title')).toHaveText('Products');
  19  |   });
  20  | 
  21  |   test('TC02 - Login fails with wrong password shows error', async ({ page }) => {
  22  |     await page.goto(BASE_URL);
  23  | 
  24  |     await page.fill('#user-name', VALID_USER);
  25  |     await page.fill('#password', 'wrong_password');
  26  |     await page.click('#login-button');
  27  | 
  28  |     const errorMessage = page.locator('[data-test="error"]');
  29  |     await expect(errorMessage).toBeVisible();
  30  |     await expect(errorMessage).toContainText('Username and password do not match');
  31  |   });
  32  | 
  33  |   test('TC03 - Add a product to the cart', async ({ page }) => {
  34  |     await page.goto(BASE_URL);
  35  |     await page.fill('#user-name', VALID_USER);
  36  |     await page.fill('#password', VALID_PASS);
  37  |     await page.click('#login-button');
  38  | 
  39  |     await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
  40  | 
  41  |     const cartBadge = page.locator('.shopping_cart_badge');
  42  |     await expect(cartBadge).toHaveText('1');
  43  | 
  44  |     await page.click('.shopping_cart_link');
  45  |     await expect(page).toHaveURL(`${BASE_URL}/cart.html`);
  46  |     await expect(page.locator('.inventory_item_name')).toHaveText('Sauce Labs Backpack');
  47  |   });
  48  | 
  49  |   test('TC04 - Sort products by price low to high', async ({ page }) => {
  50  |     await page.goto(BASE_URL);
  51  |     await page.fill('#user-name', VALID_USER);
  52  |     await page.fill('#password', VALID_PASS);
  53  |     await page.click('#login-button');
  54  | 
  55  |     await page.selectOption('[data-test="product-sort-container"]', 'lohi');
  56  | 
  57  |     const prices = await page.locator('.inventory_item_price').allTextContents();
  58  |     const numericPrices = prices.map(p => parseFloat(p.replace('$', '')));
  59  | 
  60  |     for (let i = 0; i < numericPrices.length - 1; i++) {
  61  |       expect(numericPrices[i]).toBeLessThanOrEqual(numericPrices[i + 1]);
  62  |     }
  63  |   });
  64  | 
  65  |   test('TC05 - Complete full checkout flow', async ({ page }) => {
  66  |     await page.goto(BASE_URL);
  67  |     await page.fill('#user-name', VALID_USER);
  68  |     await page.fill('#password', VALID_PASS);
  69  |     await page.click('#login-button');
  70  | 
  71  |     await page.click('[data-test="add-to-cart-sauce-labs-bike-light"]');
  72  |     await page.click('.shopping_cart_link');
  73  |     await page.click('[data-test="checkout"]');
  74  | 
  75  |     await expect(page).toHaveURL(`${BASE_URL}/checkout-step-one.html`);
  76  |     await page.fill('[data-test="firstName"]', 'Test');
  77  |     await page.fill('[data-test="lastName"]', 'User');
  78  |     await page.fill('[data-test="postalCode"]', '12345');
  79  |     await page.click('[data-test="continue"]');
  80  | 
  81  |     await expect(page).toHaveURL(`${BASE_URL}/checkout-step-two.html`);
  82  |     await expect(page.locator('.summary_info')).toBeVisible();
  83  | 
  84  |     await page.click('[data-test="finish"]');
  85  |     await expect(page).toHaveURL(`${BASE_URL}/checkout-complete.html`);
  86  |     await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');
  87  |   });
  88  | 
  89  |   test('TC06 - Logout redirects to login page', async ({ page }) => {
  90  |     await page.goto(BASE_URL);
  91  |     await page.fill('#user-name', VALID_USER);
  92  |     await page.fill('#password', VALID_PASS);
  93  |     await page.click('#login-button');
  94  | 
  95  |     await page.click('#react-burger-menu-btn');
  96  |     await page.click('#logout_sidebar_link');
  97  | 
  98  |     await expect(page).toHaveURL(BASE_URL + '/');
  99  |     await expect(page.locator('#login-button')).toBeVisible();
  100 |   });
  101 | 
  102 |   test('TC07 - Remove item from cart clears cart badge', async ({ page }) => {
  103 |     await page.goto(BASE_URL);
  104 |     await page.fill('#user-name', VALID_USER);
  105 |     await page.fill('#password', VALID_PASS);
  106 |     await page.click('#login-button');
  107 | 
> 108 |     await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
      |                ^ Error: page.click: Test timeout of 30000ms exceeded.
  109 |     await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
  110 | 
  111 |     await page.click('[data-test="remove-sauce-labs-backpack"]');
  112 | 
  113 |     await expect(page.locator('.shopping_cart_badge')).not.toBeVisible();
  114 |   });
  115 | 
  116 |   test('TC08 - Sort products by price high to low', async ({ page }) => {
  117 |     await page.goto(BASE_URL);
  118 |     await page.fill('#user-name', VALID_USER);
  119 |     await page.fill('#password', VALID_PASS);
  120 |     await page.click('#login-button');
  121 | 
  122 |     await page.selectOption('[data-test="product-sort-container"]', 'hilo');
  123 | 
  124 |     const prices = await page.locator('.inventory_item_price').allTextContents();
  125 |     const numericPrices = prices.map(p => parseFloat(p.replace('$', '')));
  126 | 
  127 |     for (let i = 0; i < numericPrices.length - 1; i++) {
  128 |       expect(numericPrices[i]).toBeGreaterThanOrEqual(numericPrices[i + 1]);
  129 |     }
  130 |   });
  131 | 
  132 |   test('TC09 - Sort products alphabetically A to Z', async ({ page }) => {
  133 |     await page.goto(BASE_URL);
  134 |     await page.fill('#user-name', VALID_USER);
  135 |     await page.fill('#password', VALID_PASS);
  136 |     await page.click('#login-button');
  137 | 
  138 |     await page.selectOption('[data-test="product-sort-container"]', 'az');
  139 | 
  140 |     const names = await page.locator('.inventory_item_name').allTextContents();
  141 |     const sorted = [...names].sort((a, b) => a.localeCompare(b));
  142 | 
  143 |     expect(names).toEqual(sorted);
  144 |   });
  145 | 
  146 |   test('TC10 - Sort products alphabetically Z to A', async ({ page }) => {
  147 |     await page.goto(BASE_URL);
  148 |     await page.fill('#user-name', VALID_USER);
  149 |     await page.fill('#password', VALID_PASS);
  150 |     await page.click('#login-button');
  151 | 
  152 |     await page.selectOption('[data-test="product-sort-container"]', 'za');
  153 | 
  154 |     const names = await page.locator('.inventory_item_name').allTextContents();
  155 |     const sorted = [...names].sort((a, b) => b.localeCompare(a));
  156 | 
  157 |     expect(names).toEqual(sorted);
  158 |   });
  159 | 
  160 |   test('TC11 - Product detail page shows correct info', async ({ page }) => {
  161 |     await page.goto(BASE_URL);
  162 |     await page.fill('#user-name', VALID_USER);
  163 |     await page.fill('#password', VALID_PASS);
  164 |     await page.click('#login-button');
  165 | 
  166 |     await page.click('.inventory_item_name >> nth=0');
  167 | 
  168 |     await expect(page).toHaveURL(/inventory-item\.html/);
  169 |     await expect(page.locator('.inventory_details_name')).toBeVisible();
  170 |     await expect(page.locator('.inventory_details_price')).toBeVisible();
  171 |     await expect(page.locator('.inventory_details_desc')).toBeVisible();
  172 |     await expect(page.locator('[data-test^="add-to-cart"]')).toBeVisible();
  173 |   });
  174 | 
  175 | });
  176 | 
```