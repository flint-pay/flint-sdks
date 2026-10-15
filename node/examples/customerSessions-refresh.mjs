import { Client } from "@flintpay/node";
const baseUrl = process.env.API_BASE_URL ?? "https://api.withflintpay.com";
const client = new Client({
  baseUrl,
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.customerSessions.refresh(
  {
    refresh_token: "example",
  },
  { idempotencyKey: idempotencyKey },
);
console.log(result.customer_id);
console.log(result.customer_session_id);
