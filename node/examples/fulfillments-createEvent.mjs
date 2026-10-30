import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.fulfillments.createEvent(
  "ful_01ARZ3NDEKTSV4RRFFQ69G5FAV",
  {
    custom_details: {
      facility: "east",
    },
    event_type: "custom",
    external_event_id: "evt_7f3df2",
    external_status: "work_started",
    external_system: "shippo",
    message: "The fulfillment partner started work.",
    occurred_at: "2026-05-13T16:05:00Z",
    package_id: "pkg_01KEZF7C008VJBE6BT0CWZT296",
    shipment_id: "shp_01KEZF7C006DZPA7FGH42HTBY8",
  },
  { idempotencyKey: idempotencyKey },
);
console.log(result.fulfillment_event_id);
console.log(result.fulfillment_id);
