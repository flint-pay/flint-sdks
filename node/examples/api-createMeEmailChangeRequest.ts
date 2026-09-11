import { Client } from '@flintpay/node';
const client = new Client({
  baseUrl: process.env.API_BASE_URL ?? 'https://sandbox.example.invalid',
  authMode: "customer", credentials: { ["customer"]: { ["CustomerSessionBearer"]: process.env.API_CUSTOMER_CUSTOMERSESSIONBEARER ?? '' } },
});
const result = await client.api.createMeEmailChangeRequest(
  {
    body: {
      new_email: "example",
    },
  },
  { maxAttempts: 1 },
);
console.log(result.data.data.customer_id);
console.log(result.data.data.email_change_request_id);
console.log(result.meta.requestId);
