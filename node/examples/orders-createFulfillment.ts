import { Client } from '@flintpay/node';
const client = new Client({
  baseUrl: process.env.API_BASE_URL ?? 'https://sandbox.example.invalid',
  apiKey: process.env.API_KEY ?? '',
});
// Reuse this key when retrying the same action.
const idempotencyKey = crypto.randomUUID();

const result = await client.orders.createFulfillment(
  "example",
  {
    line_items: [
      {
        order_line_item_id: "example",
        quantity: "100",
      },
    ],
    type: "shipment",
    "Idempotency-Key": idempotencyKey,
  },
  { maxAttempts: 1 },
);
console.log(result.fulfillment_id);
console.log(result.order_id);
