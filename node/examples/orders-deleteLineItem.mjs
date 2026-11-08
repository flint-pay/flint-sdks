import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.orders.deleteLineItem(
  "ord_01KEZF7C0054GQKJ142A8X367A",
  "li_01KEZF7C008YPRCK7VDKTGWR31",
  {},
  { idempotencyKey: idempotencyKey },
);
console.log(result.merchant_id);
console.log(result.order_id);
