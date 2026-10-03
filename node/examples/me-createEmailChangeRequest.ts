import { Client } from '@flintpay/node';
const clientBaseUrl = process.env.API_BASE_URL ?? "https://api.withflintpay.com";
const client = new Client({
  baseUrl: clientBaseUrl,
  customerToken: process.env.CUSTOMER_TOKEN ?? '',
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.me.createEmailChangeRequest(
  {
    new_email: "example",
  },
  { idempotencyKey: idempotencyKey },
);
console.log(result.customer_id);
console.log(result.email_change_request_id);
