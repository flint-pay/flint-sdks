import { Client } from '@flintpay/node';
const client = new Client({
  baseUrl: process.env.API_BASE_URL ?? 'https://sandbox.example.invalid',
  apiKey: process.env.API_KEY ?? '',
});
// Reuse this key when retrying the same action.
const idempotencyKey = crypto.randomUUID();

const result = await client.reports.create(
  {
    currency: "USD",
    interval_end_at: "2026-01-01T00:00:00Z",
    interval_start_at: "2026-01-01T00:00:00Z",
    report_type: "orders_itemized_v1",
    "Idempotency-Key": idempotencyKey,
  },
  { maxAttempts: 1 },
);
console.log(result.report_id);
console.log(result.status);
