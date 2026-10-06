import { Client } from '@flintpay/node';
const clientBaseUrl = process.env.API_BASE_URL ?? "https://api.withflintpay.com";
const client = new Client({
  baseUrl: clientBaseUrl,
  token: process.env.API_TOKEN ?? '',
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.customerVerifications.create(
  {
    channel: "email",
    customer_id: "cus_example",
    email: "buyer@example.com",
    purpose: "link_guest_purchases",
  },
  { idempotencyKey: idempotencyKey },
);
console.log(result.customer_id);
console.log(result.customer_verification_id);
