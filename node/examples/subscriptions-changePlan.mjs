import { Client } from "@flintpay/node";
const baseUrl = process.env.API_BASE_URL;
if (!baseUrl) throw new Error("Set API_BASE_URL to your sandbox or local mock URL");
const apiKey = process.env.API_KEY;
if (!apiKey) throw new Error("Set API_KEY: this call requires a credential");
const client = new Client({
  baseUrl,
  allowInsecureHttp: ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
  apiKey,
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.subscriptions.changePlan(
  "example",
  {
    billing_starts: "now",
    subscription_plan_id: "plan_00000000000000000000000000",
  },
  { idempotencyKey: idempotencyKey },
);
console.log(result.subscription.customer_id);
console.log(result.subscription.payment_method_id);
