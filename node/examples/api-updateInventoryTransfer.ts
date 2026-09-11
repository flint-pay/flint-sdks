import { Client } from '@flintpay/node';
const client = new Client({
  baseUrl: process.env.API_BASE_URL ?? 'https://sandbox.example.invalid',
  authMode: "merchant", credentials: { ["merchant"]: { ["BearerAuth"]: process.env.API_MERCHANT_BEARERAUTH ?? '' } },
});
const result = await client.api.updateInventoryTransfer(
  {
    inventory_transfer_id: "example",
    body: {},
  },
  { maxAttempts: 1 },
);
console.log(result.data.data.destination_location_id);
console.log(result.data.data.inventory_transfer_id);
console.log(result.meta.requestId);
