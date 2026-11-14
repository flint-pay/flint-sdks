import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.returns.createLineItem(
  "ret_01KEZF7C00PG93650ZKVQNGF7X",
  {
    expected_return_version: 2,
    line_item: {
      buyer_note: "I changed my mind.",
      order_line_item_id: "li_01KEZF7C00XM6VK5KNWVC3T907",
      requested_quantity: 1,
      requested_resolution_type: "refund",
      return_reason_id: "rrsn_01KEZF7C005274REWXTZRJ4BM0",
    },
  },
  { idempotencyKey: idempotencyKey },
);
console.log(result.order_id);
console.log(result.return_id);
