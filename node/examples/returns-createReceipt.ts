import { Client } from '@flintpay/node';
const clientBaseUrl = process.env.API_BASE_URL ?? "https://api.withflintpay.com";
const client = new Client({
  baseUrl: clientBaseUrl,
  token: process.env.API_TOKEN ?? '',
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.returns.createReceipt(
  "example",
  {
    line_items: [
      {
        quantity: "100",
        return_line_item_id: "example",
      },
    ],
    received_at: "2026-01-01T00:00:00Z",
    receiving_location_id: "example",
  },
  { idempotencyKey: idempotencyKey },
);
console.log(result.receiving_location_id);
console.log(result.return_id);
