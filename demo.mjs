import { createServer } from 'node:http';

const product = { id: 'headphones', name: 'Wireless headphones', priceCents: 4900, currency: 'USD' };
const page = `<!doctype html>
<html lang="en">
<meta charset="utf-8">
<title>Demo storefront</title>
<main>
  <h1>Demo storefront</h1>
  <article>
    <h2>${product.name}</h2>
    <p>$49.00</p>
    <button type="button">Add to cart</button>
  </article>
  <p role="status">Cart: 0 items</p>
</main>
<script>
  let count = 0;
  document.querySelector('button').addEventListener('click', () => {
    count += 1;
    document.querySelector('[role="status"]').textContent =
      'Cart: ' + count + (count === 1 ? ' item' : ' items');
  });
</script>
</html>`;

createServer((request, response) => {
  if (request.method === 'GET' && request.url === '/') {
    response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    response.end(page);
    return;
  }

  if (request.method === 'GET' && request.url === '/api/products/headphones') {
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify(product));
    return;
  }

  response.writeHead(404);
  response.end();
}).listen(4173, '127.0.0.1');
