import { Client } from '@flintpay/node';
const client = new Client({
  baseUrl: process.env.API_BASE_URL ?? 'https://sandbox.example.invalid',
});
const result = await client.api.verifyOnboardingEmail(
  {
    body: {
      verification_code: "example",
      verification_token: "example",
    },
  },
  { maxAttempts: 1 },
);
console.log(result.data.data.merchant.merchant_id);
console.log(result.data.data.merchant.payments.status);
console.log(result.meta.requestId);
