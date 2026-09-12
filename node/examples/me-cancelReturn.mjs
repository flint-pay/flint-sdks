import { Client } from '@flintpay/node';
const client = new Client({
  baseUrl: process.env.API_BASE_URL ?? 'https://sandbox.example.invalid',
  authMode: "customer",
  credentials: {
    ["customer"]: {
      ["CustomerSessionBearer"]: process.env.API_CUSTOMER_CUSTOMERSESSIONBEARER ?? '',
    },
  },
});
// Reuse this key when retrying the same action.
const idempotencyKey = crypto.randomUUID();

const result = await client.me.cancelReturn(
  "example",
  {
    reason: "buyer_request",
    "Idempotency-Key": idempotencyKey,
  },
  { maxAttempts: 1 },
);
console.log(result.order_id);
console.log(result.return_id);
