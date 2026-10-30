import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.webhookDeliveries.create(
  {
    reason_message: "Recovering after an endpoint outage",
    webhook_endpoint_id: "whep_01KEZF7C00940MBDY86SCZ1NW9",
    webhook_event_id: "whev_01KEZF7C00BW7XQJ98PQ8EHA81",
  },
  { idempotencyKey: idempotencyKey },
);
console.log(result.status);
console.log(result.webhook_delivery_id);
