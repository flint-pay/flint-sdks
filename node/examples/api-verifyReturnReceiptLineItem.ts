import { Client } from '@flintpay/node';
const client = new Client({
  baseUrl: process.env.API_BASE_URL ?? 'https://sandbox.example.invalid',
  authMode: "merchant", credentials: { ["merchant"]: { ["BearerAuth"]: process.env.API_MERCHANT_BEARERAUTH ?? '' } },
});
const result = await client.api.verifyReturnReceiptLineItem(
  {
    return_receipt_id: "example",
    return_receipt_line_item_id: "example",
    body: {
      return_line_item_id: "example",
      verification_reason: "order_match_confirmed",
    },
  },
  { maxAttempts: 1 },
);
console.log(result.data.data.receiving_location_id);
console.log(result.data.data.return_id);
console.log(result.meta.requestId);
