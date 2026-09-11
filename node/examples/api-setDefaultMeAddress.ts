import { Client } from '@flintpay/node';
const client = new Client({
  baseUrl: process.env.API_BASE_URL ?? 'https://sandbox.example.invalid',
  authMode: "customer", credentials: { ["customer"]: { ["CustomerSessionBearer"]: process.env.API_CUSTOMER_CUSTOMERSESSIONBEARER ?? '' } },
});
const result = await client.api.setDefaultMeAddress(
  {
    customer_address_id: "example",
    body: {
      default_for: "billing",
    },
  },
  { maxAttempts: 1 },
);
console.log(result.data.data.customer_address_id);
console.log(result.data.data.customer_id);
console.log(result.meta.requestId);
