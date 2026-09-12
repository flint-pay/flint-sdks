import { Client } from '@flintpay/node';
const client = new Client({
  baseUrl: process.env.API_BASE_URL ?? 'https://sandbox.example.invalid',
  apiKey: process.env.API_KEY ?? '',
});
// Reuse this key when retrying the same action.
const idempotencyKey = crypto.randomUUID();

const result = await client.inventoryTransfers.transition(
  {
    inventory_transfer_id: "example",
    body: {
      action: "depart",
      provenance: {},
      lines: [
        {
          inventory_transfer_line_id: "example",
          target_departed_quantity: "0",
        },
      ],
    },
    "Idempotency-Key": idempotencyKey,
  },
  { maxAttempts: 1 },
);
console.log(result.inventory_transfer.destination_location_id);
console.log(result.inventory_transfer.inventory_transfer_id);
