import { Client } from '@flintpay/node';
const client = new Client({
  baseUrl: process.env.API_BASE_URL ?? 'https://sandbox.example.invalid',
  authMode: "merchant", credentials: { ["merchant"]: { ["BearerAuth"]: process.env.API_MERCHANT_BEARERAUTH ?? '' } },
});
const result = await client.api.createReturnResolution(
  {
    body: {
      line_items: [
        {
          quantity: "1",
          return_line_item_id: "rtli_example",
        },
      ],
      resolution_type: "refund",
    },
    return_id: "example",
  },
  { maxAttempts: 1 },
);
console.log(result.data.data.return_id);
console.log(result.data.data.return_resolution_id);
console.log(result.meta.requestId);
