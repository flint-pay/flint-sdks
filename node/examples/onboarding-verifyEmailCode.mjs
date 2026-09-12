import { Client } from '@flintpay/node';
const client = new Client({
  baseUrl: process.env.API_BASE_URL ?? 'https://sandbox.example.invalid',
});
// Reuse this key when retrying the same action.
const idempotencyKey = crypto.randomUUID();

const result = await client.onboarding.verifyEmailCode(
  {
    verification_code: "example",
    verification_token: "example",
    "Idempotency-Key": idempotencyKey,
  },
  { maxAttempts: 1 },
);
console.log(result.merchant.merchant_id);
console.log(result.merchant.payments.status);
