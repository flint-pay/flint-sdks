import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.fulfillments.transition(
  "ful_01ARZ3NDEKTSV4RRFFQ69G5FAV",
  {
    action: "mark_packed",
    buyer_notification_behavior: "send",
    expected_version: 4,
    occurred_at: "2026-05-13T11:00:00Z",
  },
  { idempotencyKey: idempotencyKey },
);
console.log(result.fulfillment_id);
console.log(result.order_id);
