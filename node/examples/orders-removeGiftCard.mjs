import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.orders.removeGiftCard(
  "ord_01KEZF7C0054GQKJ142A8X367A",
  "gc_01KEZF7C00RT1618WYBM1Y94CG",
  {
    expected_version: 1,
  },
  { idempotencyKey: idempotencyKey },
);
console.log(result.merchant_id);
console.log(result.order_id);
