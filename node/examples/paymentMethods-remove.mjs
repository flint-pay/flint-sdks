import { Client } from '@flintpay/node';
const client = new Client({
  baseUrl: process.env.API_BASE_URL ?? 'https://sandbox.example.invalid',
  apiKey: process.env.API_KEY ?? '',
});
// Reuse this key when retrying the same action.
const idempotencyKey = crypto.randomUUID();

const result = await client.paymentMethods.remove(
  "example",
  {
    "Idempotency-Key": idempotencyKey,
  },
  { maxAttempts: 1 },
);
