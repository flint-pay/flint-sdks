import { Client } from '@flintpay/node';
const clientBaseUrl = process.env.API_BASE_URL ?? "https://api.withflintpay.com";
const client = new Client({
  baseUrl: clientBaseUrl,
  token: process.env.API_TOKEN ?? '',
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.subscriptions.create(
  {
    billing_start: {
      type: "immediate",
    },
    customer_id: "example",
    plan_id: "example",
    billing_schedule: {
      owner: "flint",
    },
    "Idempotency-Key": idempotencyKey,
  }
);
console.log(result.customer_id);
console.log(result.payment_method_id);
