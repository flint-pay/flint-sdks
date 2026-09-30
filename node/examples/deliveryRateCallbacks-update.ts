import { Client } from '@flintpay/node';
const clientBaseUrl = process.env.API_BASE_URL ?? "https://api.withflintpay.com";
const client = new Client({
  baseUrl: clientBaseUrl,
  token: process.env.API_TOKEN ?? '',
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.deliveryRateCallbacks.update(
  "example",
  {
    name: "example",
    "Idempotency-Key": idempotencyKey,
  }
);
console.log(result.current_delivery_rate_callback_revision_id);
console.log(result.delivery_rate_callback_id);
