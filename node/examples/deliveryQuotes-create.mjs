import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.deliveryQuotes.create(
  {
    checkout_session_id: "cs_01KEZF7C004JRWFW43H037MQRN",
  },
  { idempotencyKey: idempotencyKey },
);
console.log(result.delivery_quote_id);
console.log(result.status);
