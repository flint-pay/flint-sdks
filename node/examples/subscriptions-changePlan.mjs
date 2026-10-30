import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.subscriptions.changePlan(
  "sub_01ARZ3NDEKTSV4RRFFQ69G5FAV",
  {
    billing_starts: "now",
    subscription_plan_id: "plan_00000000000000000000000000",
  },
  { idempotencyKey: idempotencyKey },
);
console.log(result.subscription.customer_id);
console.log(result.subscription.payment_method_id);
