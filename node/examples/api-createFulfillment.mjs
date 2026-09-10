import { Client } from '@flintpay/node';
const client = new Client({ baseUrl: process.env.API_BASE_URL ?? 'https://sandbox.example.invalid', allowInsecureHttp: process.env.API_ALLOW_INSECURE_HTTP === '1', authMode: "merchant", credentials: { ["merchant"]: { ["BearerAuth"]: process.env.API_MERCHANT_BEARERAUTH ?? '' } } });
const result = await client.api.createFulfillment({
  "order_id": "example",
  "body": {
    "line_items": [
      {
        "order_line_item_id": "example",
        "quantity": "100"
      }
    ],
    "type": "shipment"
  }
}, { maxAttempts: 1 });
console.log(result.meta.requestId);
