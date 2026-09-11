import { Client } from '@flintpay/node';
const client = new Client({
  baseUrl: process.env.API_BASE_URL ?? 'https://sandbox.example.invalid',
  authMode: "merchant", credentials: { ["merchant"]: { ["BearerAuth"]: process.env.API_MERCHANT_BEARERAUTH ?? '' } },
});
const result = await client.api.createRiskPreview(
  {
    body: {
      risk_rule_id: "rr_example",
    },
  },
  { maxAttempts: 1 },
);
console.log(result.meta.requestId);
