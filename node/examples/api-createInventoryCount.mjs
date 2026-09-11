import { Client } from '@flintpay/node';
const client = new Client({
  baseUrl: process.env.API_BASE_URL ?? 'https://sandbox.example.invalid',
  authMode: "merchant", credentials: { ["merchant"]: { ["BearerAuth"]: process.env.API_MERCHANT_BEARERAUTH ?? '' } },
});
const result = await client.api.createInventoryCount(
  {
    "Idempotency-Key": "example",
    body: {
      inventory_item_ids: ["example"],
      location_id: "example",
    },
  },
  { maxAttempts: 1 },
);
console.log(result.data.data.inventory_count_id);
console.log(result.data.data.location_id);
console.log(result.meta.requestId);
