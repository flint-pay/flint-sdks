import { Client } from '@flintpay/node';
const client = new Client({
  baseUrl: process.env.API_BASE_URL ?? 'https://sandbox.example.invalid',
  authMode: "merchant", credentials: { ["merchant"]: { ["BearerAuth"]: process.env.API_MERCHANT_BEARERAUTH ?? '' } },
});
const result = await client.api.createInventoryReceipt(
  {
    "Idempotency-Key": "example",
    body: {
      lines: [],
    },
  },
  { maxAttempts: 1 },
);
console.log(result.data.data.inventory_receipt.inventory_receipt_id);
console.log(result.meta.requestId);
