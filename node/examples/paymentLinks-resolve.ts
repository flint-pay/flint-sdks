import { Client } from "@flintpay/node";
const baseUrl = process.env.API_BASE_URL ?? "https://api.withflintpay.com";
const client = new Client({
  baseUrl,
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.paymentLinks.resolve(
  "example",
  {
    resolution_context: "example",
  },
  { idempotencyKey: idempotencyKey },
);
console.log(result.checkout_session.checkout_session_id);
console.log(result.checkout_session.status);
