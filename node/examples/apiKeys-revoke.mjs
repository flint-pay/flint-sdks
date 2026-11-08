import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.apiKeys.revoke(
  "key_01KEZF7C008CTC2G5V6J08M6S7",
  undefined,
  { idempotencyKey: idempotencyKey },
);
console.log(result.api_key_id);
console.log(result.merchant_id);
