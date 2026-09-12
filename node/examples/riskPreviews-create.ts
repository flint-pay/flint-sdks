import { Client } from '@flintpay/node';
const client = new Client({
  baseUrl: process.env.API_BASE_URL ?? 'https://sandbox.example.invalid',
  apiKey: process.env.API_KEY ?? '',
});
const result = await client.riskPreviews.create(
  {
    risk_rule_id: "rr_example",
  },
  { maxAttempts: 1 },
);
