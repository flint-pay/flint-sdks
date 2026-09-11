import { Client } from '@flintpay/node';
const client = new Client({
  baseUrl: process.env.API_BASE_URL ?? 'https://sandbox.example.invalid',
});
const result = await client.api.refreshCustomerSession(
  {
    "Idempotency-Key": "example",
    body: {
      refresh_token: "example",
    },
  },
  { maxAttempts: 1 },
);
console.log(result.data.data.customer_id);
console.log(result.data.data.customer_session_id);
console.log(result.meta.requestId);
