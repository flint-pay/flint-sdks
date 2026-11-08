import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.orders.cancelPaymentAttempt(
  "ord_01KEZF7C0054GQKJ142A8X367A",
  "opat_01KEZF7C00B5PW9F2R8A4YSH5D",
  undefined,
  { idempotencyKey: idempotencyKey },
);
console.log(result.order.merchant_id);
console.log(result.order.order_id);
