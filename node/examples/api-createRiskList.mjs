import { Client } from '@flintpay/node';
const client = new Client({
  baseUrl: process.env.API_BASE_URL ?? 'https://sandbox.example.invalid',
  authMode: "merchant", credentials: { ["merchant"]: { ["BearerAuth"]: process.env.API_MERCHANT_BEARERAUTH ?? '' } },
});
const result = await client.api.createRiskList(
  {
    body: {
      alias: "example",
      name: "example",
      item_type: "card_fingerprint",
    },
  },
  { maxAttempts: 1 },
);
console.log(result.data.data.risk_list_id);
console.log(result.meta.requestId);
