import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.subscriptionPlans.create(
  {
    billing_interval: "daily",
    billing_interval_count: 1,
    currency: "USD",
    line_items: [
      {
        type: "variant",
        variant_id: "var_01ARZ3NDEKTSV4RRFFQ69G5FAV",
      },
    ],
    name: "example",
  },
  { idempotencyKey: idempotencyKey },
);
console.log(result.status);
console.log(result.subscription_plan_id);
