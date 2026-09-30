import { Client } from '@flintpay/node';
const clientBaseUrl = process.env.API_BASE_URL ?? "https://api.withflintpay.com";
const client = new Client({
  baseUrl: clientBaseUrl,
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.customerSessions.refresh(
  {
    refresh_token: "example",
    "Idempotency-Key": idempotencyKey,
  }
);
console.log(result.customer_id);
console.log(result.customer_session_id);
