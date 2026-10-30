import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.paymentIntents.update(
  "pi_01ARZ3NDEKTSV4RRFFQ69G5FAV",
  {
    receipt_email: "buyer@example.com",
  },
  { idempotencyKey: idempotencyKey },
);
console.log(result.payment_intent_id);
console.log(result.status);
