import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.returns.create(
  {
    line_items: [
      {
        order_line_item_id: "li_01ARZ3NDEKTSV4RRFFQ69G5FAV",
        requested_quantity: 1,
        return_reason_id: "rrsn_01ARZ3NDEKTSV4RRFFQ69G5FAV",
      },
    ],
    order_id: "ord_01ARZ3NDEKTSV4RRFFQ69G5FAV",
  },
  { idempotencyKey: idempotencyKey },
);
console.log(result.order_id);
console.log(result.return_id);
