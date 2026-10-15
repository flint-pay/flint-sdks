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

const result = await client.subscriptions.updateBillingSchedule(
  {
    subscription_id: "example",
    body: {
      owner: "flint",
      initiated_by: "buyer",
      next_billing_at: "2026-01-01T00:00:00Z",
    },
  },
  { idempotencyKey: idempotencyKey },
);
console.log(result.customer_id);
console.log(result.payment_method_id);
