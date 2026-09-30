import { Client } from '@flintpay/node';
const clientBaseUrl = process.env.API_BASE_URL ?? "https://api.withflintpay.com";
const client = new Client({
  baseUrl: clientBaseUrl,
  token: process.env.API_TOKEN ?? '',
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.inventoryCounts.cancel(
  "example",
  {
    "Idempotency-Key": idempotencyKey,
  }
);
console.log(result.inventory_count.inventory_count_id);
console.log(result.inventory_count.location_id);
