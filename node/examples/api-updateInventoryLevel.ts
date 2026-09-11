import { Client } from '@flintpay/node';
const client = new Client({
  baseUrl: process.env.API_BASE_URL ?? 'https://sandbox.example.invalid',
  authMode: "merchant", credentials: { ["merchant"]: { ["BearerAuth"]: process.env.API_MERCHANT_BEARERAUTH ?? '' } },
});
const result = await client.api.updateInventoryLevel(
  {
    "Idempotency-Key": "example",
    inventory_level_id: "example",
    body: {
      safety_stock_quantity: "0",
    },
  },
  { maxAttempts: 1 },
);
console.log(result.data.data.inventory_level.inventory_item_id);
console.log(result.data.data.inventory_level.inventory_level_id);
console.log(result.meta.requestId);
