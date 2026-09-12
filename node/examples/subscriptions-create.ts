import { Client } from '@flintpay/node';
const client = new Client({
  baseUrl: process.env.API_BASE_URL ?? 'https://sandbox.example.invalid',
  apiKey: process.env.API_KEY ?? '',
});
// Reuse this key when retrying the same action.
const idempotencyKey = crypto.randomUUID();

const result = await client.subscriptions.create(
  {
    billing_start: {
      type: "immediate",
    },
    customer_id: "example",
    plan_id: "example",
    billing_schedule: {
      owner: "flint",
    },
    "Idempotency-Key": idempotencyKey,
  },
  { maxAttempts: 1 },
);
console.log(result.customer_id);
console.log(result.payment_method_id);
