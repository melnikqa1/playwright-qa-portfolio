# Playwright QA Portfolio

Three Playwright checks written in TypeScript for a small e-commerce demo. The UI check verifies the cart count after adding a product. The API check verifies the response status, JSON content type, and pricing fields.

[![Playwright](https://github.com/melnikqa1/playwright-qa-portfolio/actions/workflows/playwright.yml/badge.svg)](https://github.com/melnikqa1/playwright-qa-portfolio/actions/workflows/playwright.yml)

## Run locally

With Node.js and npm installed:

```sh
npm ci
npx playwright install chromium
npm test
```

Playwright starts the demo server locally. The checks use fictional product data and require no accounts or external APIs. Failed tests retain traces in `test-results/`.

## Coverage

- **UI** verifies the customer-visible cart state through accessible locators.
- **API** verifies the product ID, price in minor units, and currency.
- **Missing product** verifies that the API returns HTTP 404 so clients can distinguish missing products from successful responses.

GitHub Actions runs the suite on pull requests and pushes to main. On failure, it uploads the HTML report and available traces.
