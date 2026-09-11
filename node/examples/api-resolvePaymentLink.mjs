import { Client } from '@flintpay/node';
const client = new Client({
  baseUrl: process.env.API_BASE_URL ?? 'https://sandbox.example.invalid',
});
const result = await client.api.resolvePaymentLink(
  {
    payment_link_id: "example",
    "Idempotency-Key": "example",
    body: {
      resolution_context: "example",
    },
  },
  { maxAttempts: 1 },
);
console.log(result.data.data.checkout_session.checkout_session_id);
console.log(result.data.data.checkout_session.status);
console.log(result.meta.requestId);
