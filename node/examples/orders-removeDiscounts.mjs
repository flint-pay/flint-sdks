import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.orders.removeDiscounts(
  "ord_01KEZF7C0054GQKJ142A8X367A",
  {
    order_discount_ids: ["ad_01JFXH8Z2K7QF9V3MB0N4T6RCP"],
  },
  { idempotencyKey: idempotencyKey },
);
console.log(result.merchant_id);
console.log(result.order_id);
