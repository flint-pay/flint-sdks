import { Client } from '@flintpay/node';
const clientBaseUrl = process.env.API_BASE_URL ?? "https://api.withflintpay.com";
const client = new Client({
  baseUrl: clientBaseUrl,
  token: process.env.API_TOKEN ?? '',
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.riskRules.create(
  {
    action: "review",
    description: "Synthetic SDK example",
    predicate: {
      attribute: "payment_method_type",
      operator: "eq",
      value: "card",
    },
  },
  { idempotencyKey: idempotencyKey },
);
console.log(result.risk_rule_id);
