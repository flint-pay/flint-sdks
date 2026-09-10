import { Client } from '@flintpay/node';
const client = new Client({ baseUrl: process.env.API_BASE_URL ?? 'https://sandbox.example.invalid', allowInsecureHttp: process.env.API_ALLOW_INSECURE_HTTP === '1', authMode: "merchant", credentials: { ["merchant"]: { ["BearerAuth"]: process.env.API_MERCHANT_BEARERAUTH ?? '' } } });
const result = await client.api.createReturnInspection({
  "return_id": "example",
  "body": {
    "inspected_at": "2026-01-01T00:00:00Z",
    "line_items": [
      {
        "acceptance_status": "accepted",
        "condition": "new",
        "quantity": "100",
        "return_receipt_line_item_id": "example"
      }
    ],
    "location_id": "example",
    "return_receipt_id": "example"
  }
}, { maxAttempts: 1 });
console.log(result.meta.requestId);
