import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
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
console.log(result.status);
