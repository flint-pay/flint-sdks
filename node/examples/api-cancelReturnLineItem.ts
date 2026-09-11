import { Client } from '@flintpay/node';
const client = new Client({
  baseUrl: process.env.API_BASE_URL ?? 'https://sandbox.example.invalid',
  authMode: "merchant", credentials: { ["merchant"]: { ["BearerAuth"]: process.env.API_MERCHANT_BEARERAUTH ?? '' } },
});
const result = await client.api.cancelReturnLineItem(
  {
    return_id: "example",
    return_line_item_id: "example",
    body: {
      handback_quantity: "100",
      quantity: "100",
      reason: "buyer_request",
    },
  },
  { maxAttempts: 1 },
);
console.log(result.data.data.order_id);
console.log(result.data.data.return_id);
console.log(result.meta.requestId);
