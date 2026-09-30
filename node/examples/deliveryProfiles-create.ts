import { Client } from '@flintpay/node';
const clientBaseUrl = process.env.API_BASE_URL ?? "https://api.withflintpay.com";
const client = new Client({
  baseUrl: clientBaseUrl,
  token: process.env.API_TOKEN ?? '',
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.deliveryProfiles.create(
  {
    name: "example",
    configuration: {
      requirement: "none",
    },
    "Idempotency-Key": idempotencyKey,
  }
);
console.log(result.current_delivery_profile_revision_id);
console.log(result.delivery_profile_id);
