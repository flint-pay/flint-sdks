import { Client } from '@flintpay/node';
const clientBaseUrl = process.env.API_BASE_URL ?? "https://api.withflintpay.com";
const client = new Client({
  baseUrl: clientBaseUrl,
  token: process.env.API_TOKEN ?? '',
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.subscriptionDeliveryMigrations.create(
  {
    from_delivery_method_id: "dmet_01J00000000000000000000001",
    to_delivery_method_id: "dmet_01J00000000000000000000002",
  },
  { idempotencyKey: idempotencyKey },
);
console.log(result.from_delivery_method_id);
console.log(result.status);
