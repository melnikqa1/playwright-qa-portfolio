import { expect, test } from '@playwright/test';

test('a shopper can add a product to the cart', async ({ page }) => {
  await page.goto('/');
  const product = page.getByRole('article').filter({
    has: page.getByRole('heading', { name: 'Wireless headphones' }),
  });
  const cart = page.getByRole('status');

  await expect(cart).toHaveText('Cart: 0 items');
  await product.getByRole('button', { name: 'Add to cart' }).click();
  await expect(cart).toHaveText('Cart: 1 item');
});

test('the product API returns the expected pricing contract', async ({ request }) => {
  const response = await request.get('/api/products/headphones');

  expect(response.status()).toBe(200);
  expect(response.headers()['content-type']).toContain('application/json');
  expect(await response.json()).toMatchObject({
    id: 'headphones',
    name: 'Wireless headphones',
    priceCents: 4900,
    currency: 'USD',
  });
});

test('the product API returns 404 for an unknown product', async ({ request }) => {
  const response = await request.get('/api/products/unknown-product');

  expect(response.status()).toBe(404);
});
