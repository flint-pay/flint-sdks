import { Client } from '@flintpay/node';
const client = new Client({
  baseUrl: process.env.API_BASE_URL ?? 'https://sandbox.example.invalid',
  authMode: "merchant", credentials: { ["merchant"]: { ["BearerAuth"]: process.env.API_MERCHANT_BEARERAUTH ?? '' } },
});
const result = await client.api.createInventoryTransfer(
  {
    "Idempotency-Key": "example",
    body: {
      destination_location_id: "example",
      lines: [
        {
          inventory_item_id: "example",
          requested_quantity: "1",
        },
      ],
      origin_location_id: "example",
    },
  },
  { maxAttempts: 1 },
);
console.log(result.data.data.destination_location_id);
console.log(result.data.data.inventory_transfer_id);
console.log(result.meta.requestId);
