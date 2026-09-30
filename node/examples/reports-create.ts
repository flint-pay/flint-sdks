import { Client } from '@flintpay/node';
const clientBaseUrl = process.env.API_BASE_URL ?? "https://api.withflintpay.com";
const client = new Client({
  baseUrl: clientBaseUrl,
  token: process.env.API_TOKEN ?? '',
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.reports.create(
  {
    currency: "USD",
    interval_end_at: "2026-01-02T00:00:00Z",
    interval_start_at: "2026-01-01T00:00:00Z",
    report_type: "orders_itemized_v1",
    "Idempotency-Key": idempotencyKey,
  }
);
console.log(result.report_id);
console.log(result.status);
