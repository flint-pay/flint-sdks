import { Client } from '@flintpay/node';
const client = new Client({
  baseUrl: process.env.API_BASE_URL ?? 'https://sandbox.example.invalid',
  authMode: "merchant", credentials: { ["merchant"]: { ["BearerAuth"]: process.env.API_MERCHANT_BEARERAUTH ?? '' } },
});
const result = await client.api.createPaymentMethodDomain(
  {
    body: {
      domain_name: "payments.example.invalid",
    },
  },
  { maxAttempts: 1 },
);
console.log(result.data.data.payment_method_domain_id);
console.log(result.data.data.status);
console.log(result.meta.requestId);
