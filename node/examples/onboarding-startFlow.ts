import { Client } from '@flintpay/node';
const client = new Client({
  baseUrl: process.env.API_BASE_URL ?? 'https://sandbox.example.invalid',
});
// Reuse this key when retrying the same action.
const idempotencyKey = crypto.randomUUID();

const result = await client.onboarding.startFlow(
  {
    email: "example",
    first_name: "example",
    last_name: "example",
    "Idempotency-Key": idempotencyKey,
  },
  { maxAttempts: 1 },
);
