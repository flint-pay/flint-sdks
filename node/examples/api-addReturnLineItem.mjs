import { Client } from '@flintpay/node';
const client = new Client({
  baseUrl: process.env.API_BASE_URL ?? 'https://sandbox.example.invalid',
  authMode: "merchant", credentials: { ["merchant"]: { ["BearerAuth"]: process.env.API_MERCHANT_BEARERAUTH ?? '' } },
});
const result = await client.api.addReturnLineItem(
  {
    return_id: "example",
    body: {
      line_item: {
        order_line_item_id: "example",
        requested_quantity: "100",
        return_reason_id: "example",
      },
    },
  },
  { maxAttempts: 1 },
);
console.log(result.data.data.order_id);
console.log(result.data.data.return_id);
console.log(result.meta.requestId);
