import { Client } from '@flintpay/node';
const client = new Client({
  baseUrl: process.env.API_BASE_URL ?? 'https://sandbox.example.invalid',
  apiKey: process.env.API_KEY ?? '',
});
// Reuse this key when retrying the same action.
const idempotencyKey = crypto.randomUUID();

const result = await client.returns.createInspection(
  "example",
  {
    inspected_at: "2026-01-01T00:00:00Z",
    line_items: [
      {
        acceptance_status: "accepted",
        condition: "new",
        quantity: "100",
        return_receipt_line_item_id: "example",
      },
    ],
    location_id: "example",
    return_receipt_id: "example",
    "Idempotency-Key": idempotencyKey,
  },
  { maxAttempts: 1 },
);
console.log(result.location_id);
console.log(result.return_id);
