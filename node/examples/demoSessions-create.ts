import { Client } from "@flintpay/node";
const baseUrl = process.env.API_BASE_URL ?? "https://api.withflintpay.com";
const client = new Client({
  baseUrl,
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.demoSessions.create(
  {},
  { idempotencyKey: idempotencyKey },
);
console.log(result.demo_session_id);
console.log(result.sandbox_id);
