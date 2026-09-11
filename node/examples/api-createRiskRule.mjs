import { Client } from '@flintpay/node';
const client = new Client({
  baseUrl: process.env.API_BASE_URL ?? 'https://sandbox.example.invalid',
  authMode: "merchant", credentials: { ["merchant"]: { ["BearerAuth"]: process.env.API_MERCHANT_BEARERAUTH ?? '' } },
});
const result = await client.api.createRiskRule(
  {
    body: {
      action: "review",
      description: "Synthetic SDK example",
      predicate: {
        attribute: "payment_method_type",
        operator: "eq",
        value: "card",
      },
    },
  },
  { maxAttempts: 1 },
);
console.log(result.data.data.risk_rule_id);
console.log(result.meta.requestId);
