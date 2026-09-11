import { Client } from '@flintpay/node';
const client = new Client({
  baseUrl: process.env.API_BASE_URL ?? 'https://sandbox.example.invalid',
  authMode: "merchant", credentials: { ["merchant"]: { ["BearerAuth"]: process.env.API_MERCHANT_BEARERAUTH ?? '' } },
});
const result = await client.api.transitionInventoryTransfer(
  {
    "Idempotency-Key": "example",
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
  },
  { maxAttempts: 1 },
);
console.log(result.data.data.inventory_transfer.destination_location_id);
console.log(result.data.data.inventory_transfer.inventory_transfer_id);
console.log(result.meta.requestId);
