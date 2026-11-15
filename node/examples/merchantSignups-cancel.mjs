import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.merchantSignups.cancel(
  "msu_01KEZF7C00SRGYRMBPKRKW8V9J",
  undefined,
  { idempotencyKey: idempotencyKey },
);
console.log(result.merchant_signup_id);
console.log(result.partner_app_id);
