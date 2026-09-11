import { Client } from '@flintpay/node';
const client = new Client({
  baseUrl: process.env.API_BASE_URL ?? 'https://sandbox.example.invalid',
  authMode: "customer", credentials: { ["customer"]: { ["CustomerSessionBearer"]: process.env.API_CUSTOMER_CUSTOMERSESSIONBEARER ?? '' } },
});
const result = await client.api.createMeReturnResolutionCheckoutSession(
  {
    resolution_id: "example",
  },
  { maxAttempts: 1 },
);
console.log(result.data.data.checkout_session.checkout_session_id);
console.log(result.data.data.checkout_session.status);
console.log(result.meta.requestId);
