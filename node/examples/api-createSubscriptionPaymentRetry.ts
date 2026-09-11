import { Client } from '@flintpay/node';
const client = new Client({
  baseUrl: process.env.API_BASE_URL ?? 'https://sandbox.example.invalid',
  authMode: "merchant", credentials: { ["merchant"]: { ["BearerAuth"]: process.env.API_MERCHANT_BEARERAUTH ?? '' } },
});
const result = await client.api.createSubscriptionPaymentRetry(
  {
    subscription_id: "example",
    "Idempotency-Key": "example",
  },
  { maxAttempts: 1 },
);
console.log(result.data.data.status);
console.log(result.data.data.subscription_id);
console.log(result.meta.requestId);
