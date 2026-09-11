import { Client } from '@flintpay/node';
const client = new Client({
  baseUrl: process.env.API_BASE_URL ?? 'https://sandbox.example.invalid',
  authMode: "merchant", credentials: { ["merchant"]: { ["BearerAuth"]: process.env.API_MERCHANT_BEARERAUTH ?? '' } },
});
const result = await client.api.updateSubscriptionBillingSchedule(
  {
    subscription_id: "example",
    body: {
      owner: "flint",
      initiated_by: "buyer",
      next_billing_at: "2026-01-01T00:00:00Z",
    },
  },
  { maxAttempts: 1 },
);
console.log(result.data.data.customer_id);
console.log(result.data.data.payment_method_id);
console.log(result.meta.requestId);
