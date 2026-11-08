import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.orders.create(
  {
    line_items: [
      {
        type: "variant",
        variant_id: "var_01KEZF7C004GSH2KT8CNYVMHGX",
      },
    ],
  },
  { idempotencyKey: idempotencyKey },
);
console.log(result.merchant_id);
console.log(result.order_id);
