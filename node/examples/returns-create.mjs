import { Client } from '@flintpay/node';
const client = new Client({
  baseUrl: process.env.API_BASE_URL ?? 'https://sandbox.example.invalid',
  apiKey: process.env.API_KEY ?? '',
});
// Reuse this key when retrying the same action.
const idempotencyKey = crypto.randomUUID();

const result = await client.returns.create(
  {
    line_items: [
      {
        order_line_item_id: "example",
        requested_quantity: "100",
        return_reason_id: "example",
      },
    ],
    order_id: "example",
    "Idempotency-Key": idempotencyKey,
  },
  { maxAttempts: 1 },
);
console.log(result.order_id);
console.log(result.return_id);
