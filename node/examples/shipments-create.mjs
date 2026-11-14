import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.shipments.create(
  {
    direction: "outbound",
    external_reference_id: "ship_789",
    external_system: "merchant_wms",
    fulfillment_id: "ful_01KEZF7C009TD0XN8YPHHHXQFR",
    metadata: {
      warehouse: "east",
    },
  },
  { idempotencyKey: idempotencyKey },
);
console.log(result.fulfillment_id);
console.log(result.order_id);
