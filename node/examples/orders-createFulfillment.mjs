import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.orders.createFulfillment(
  "ord_01ARZ3NDEKTSV4RRFFQ69G5FAV",
  {
    line_items: [
      {
        order_line_item_id: "li_01KEZF7C004XP0V220YVMGQ354",
        quantity: 1,
      },
    ],
    metadata: {
      source: "dispatch",
    },
    shipment: {
      package: {
        carrier: "ups",
        status: "created",
        tracking_number: "1Z999AA10123456784",
      },
      packaging: "single_package",
    },
    type: "shipment",
  },
  { idempotencyKey: idempotencyKey },
);
console.log(result.fulfillment_id);
console.log(result.order_id);
