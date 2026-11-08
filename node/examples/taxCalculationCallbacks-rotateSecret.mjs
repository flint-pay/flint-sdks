import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.taxCalculationCallbacks.rotateSecret(
  "tcb_01KEZF7C00N7SER74Y2E6D1ZGT",
  {},
  { idempotencyKey: idempotencyKey },
);
console.log(result.key_id);
console.log(result.tax_calculation_callback_id);
