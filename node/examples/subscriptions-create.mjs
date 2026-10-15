import { Client } from "@flintpay/node";
const baseUrl = process.env.API_BASE_URL ?? "https://api.withflintpay.com";
const apiKey = process.env.API_KEY;
if (!apiKey) throw new Error("Set API_KEY: this call requires a credential");
const client = new Client({
  baseUrl,
  apiKey,
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.subscriptions.create(
  {
    billing_start: {
      type: "immediate",
    },
    customer_id: "example",
    subscription_plan_id: "example",
    billing_schedule: {
      owner: "flint",
    },
  },
  { idempotencyKey: idempotencyKey },
);
console.log(result.customer_id);
console.log(result.payment_method_id);
