import { Client } from '@flintpay/node';
const client = new Client({
  baseUrl: process.env.API_BASE_URL ?? 'https://sandbox.example.invalid',
  authMode: "merchant", credentials: { ["merchant"]: { ["BearerAuth"]: process.env.API_MERCHANT_BEARERAUTH ?? '' } },
});
const result = await client.api.createSubscription(
  {
    body: {
      billing_start: {
        type: "immediate",
      },
      customer_id: "example",
      plan_id: "example",
      billing_schedule: {
        owner: "flint",
      },
    },
  },
  { maxAttempts: 1 },
);
console.log(result.data.data.customer_id);
console.log(result.data.data.payment_method_id);
console.log(result.meta.requestId);
