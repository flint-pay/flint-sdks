import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.subscriptions.create(
  {
    billing_anchor_day: 15,
    billing_schedule: {
      owner: "flint",
    },
    billing_start: {
      type: "immediate",
    },
    customer_id: "cus_01KEZF7C003ACYXT6Q5EQZ78EE",
    metadata: {
      source: "api",
    },
    payment_method_id: "pm_01KEZF7C00WX8CKEVFDMRMYMBM",
    terms: {
      subscription_plan_id: "plan_01KEZF7C00S177Q3KK6BKXGXV7",
      type: "subscription_plan",
    },
  },
  { idempotencyKey: idempotencyKey },
);
console.log(result.customer_id);
console.log(result.payment_method_id);
