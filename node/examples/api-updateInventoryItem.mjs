import { Client } from '@flintpay/node';
const client = new Client({
  baseUrl: process.env.API_BASE_URL ?? 'https://sandbox.example.invalid',
  authMode: "merchant", credentials: { ["merchant"]: { ["BearerAuth"]: process.env.API_MERCHANT_BEARERAUTH ?? '' } },
});
const result = await client.api.updateInventoryItem(
  {
    inventory_item_id: "example",
    body: {},
  },
  { maxAttempts: 1 },
);
console.log(result.data.data.inventory_item_id);
console.log(result.data.data.status);
console.log(result.meta.requestId);
