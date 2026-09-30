import { Client } from '@flintpay/node';
const clientBaseUrl = process.env.API_BASE_URL ?? "https://api.withflintpay.com";
const client = new Client({
  baseUrl: clientBaseUrl,
  token: process.env.API_TOKEN ?? '',
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.returns.createDisposition(
  "example",
  {
    disposition_type: "sellable",
    occurred_at: "2026-01-01T00:00:00Z",
    quantity: "100",
    reason: "inspection_result",
    return_receipt_line_item_id: "example",
    "Idempotency-Key": idempotencyKey,
  }
);
console.log(result.return_disposition_id);
console.log(result.return_id);
