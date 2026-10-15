import { Client } from "@flintpay/node";
const baseUrl = process.env.API_BASE_URL ?? "https://api.withflintpay.com";
const apiKey = process.env.API_KEY;
if (!apiKey) throw new Error("Set API_KEY: this call requires a credential");
const client = new Client({
  baseUrl,
  apiKey,
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.reports.create(
  {
    currency: "USD",
    interval_end_at: "2026-01-02T00:00:00Z",
    interval_start_at: "2026-01-01T00:00:00Z",
    report_type: "orders_itemized_v1",
  },
  { idempotencyKey: idempotencyKey },
);
console.log(result.report_id);
console.log(result.status);
