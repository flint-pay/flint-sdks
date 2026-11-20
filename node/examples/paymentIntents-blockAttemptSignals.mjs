import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.paymentIntents.blockAttemptSignals(
  "pi_01KEZF7C00G8H9D509YEV22P7R",
  "pia_01KEZF7C00CGGHWWR7KPCGNJRM",
  {},
  { idempotencyKey: idempotencyKey },
);
console.log(result.payment_attempt_id);
console.log(result.payment_intent_id);
