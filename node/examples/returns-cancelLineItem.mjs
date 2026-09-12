import { Client } from '@flintpay/node';
const client = new Client({
  baseUrl: process.env.API_BASE_URL ?? 'https://sandbox.example.invalid',
  apiKey: process.env.API_KEY ?? '',
});
// Reuse this key when retrying the same action.
const idempotencyKey = crypto.randomUUID();

const result = await client.returns.cancelLineItem(
  "example",
  "example",
  {
    handback_quantity: "100",
    quantity: "100",
    reason: "buyer_request",
    "Idempotency-Key": idempotencyKey,
  },
  { maxAttempts: 1 },
);
console.log(result.order_id);
console.log(result.return_id);
