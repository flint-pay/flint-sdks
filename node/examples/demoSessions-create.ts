import { Client } from '@flintpay/node';
const clientBaseUrl = process.env.API_BASE_URL ?? "https://api.withflintpay.com";
const client = new Client({
  baseUrl: clientBaseUrl,
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.demoSessions.create(
  {
    "Idempotency-Key": idempotencyKey,
  }
);
console.log(result.demo_session_id);
console.log(result.sandbox_id);
