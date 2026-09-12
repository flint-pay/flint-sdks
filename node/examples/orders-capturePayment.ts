import { Client } from '@flintpay/node';
const client = new Client({
  baseUrl: process.env.API_BASE_URL ?? 'https://sandbox.example.invalid',
  apiKey: process.env.API_KEY ?? '',
});
// Reuse this key when retrying the same action.
const idempotencyKey = crypto.randomUUID();

const result = await client.orders.capturePayment(
  "example",
  "example",
  undefined,
  { maxAttempts: 1 },
);
console.log(result.order.order_id);
console.log(result.order.status);
