import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.shipments.createPackage(
  "shp_01ARZ3NDEKTSV4RRFFQ69G5FAV",
  {
    carrier: "ups",
    dimensions: {
      height: 4,
      length: 8,
      unit: "inch",
      width: 6,
    },
    expected_delivery_at: "2026-05-15T18:00:00Z",
    external_reference_id: "pkg_789",
    external_system: "merchant_wms",
    metadata: {
      box: "small",
    },
    service_code: "ground",
    status: "shipped",
    tracking_number: "1Z999AA10123456784",
    tracking_url: "https://track.example.com/1Z999AA10123456784",
    weight: {
      unit: "pound",
      value: 1.2,
    },
  },
  { idempotencyKey: idempotencyKey },
);
console.log(result.fulfillment_id);
console.log(result.order_id);
