import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.orders.createEdit(
  "ord_01KEZF7C0054GQKJ142A8X367A",
  {
    expected_order_version: 1,
    remove_line_items: [
      {
        order_line_item_id: "li_01KEZF7C008YPRCK7VDKTGWR31",
        quantity: 1,
      },
    ],
  },
  { idempotencyKey: idempotencyKey },
);
console.log(result.order.merchant_id);
console.log(result.order.order_id);
