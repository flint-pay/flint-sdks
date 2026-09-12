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

const result = await client.me.createAddress(
  {
    address: {
      city: "example",
      country: "US",
      line1: "example",
      postal_code: "example",
      state: "example",
    },
    recipient_name: "example",
    "Idempotency-Key": idempotencyKey,
  },
  { maxAttempts: 1 },
);
console.log(result.customer_address_id);
console.log(result.customer_id);
