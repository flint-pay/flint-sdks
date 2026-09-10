import { Client } from '@flintpay/node';
const client = new Client({ baseUrl: process.env.API_BASE_URL ?? 'https://sandbox.example.invalid', allowInsecureHttp: process.env.API_ALLOW_INSECURE_HTTP === '1', authMode: "merchant", credentials: { ["merchant"]: { ["BearerAuth"]: process.env.API_MERCHANT_BEARERAUTH ?? '' } } });
const result = await client.api.transitionInventoryTransfer({
  "Idempotency-Key": "example",
  "inventory_transfer_id": "example",
  "body": {
    "action": "depart",
    "provenance": {},
    "lines": [
      {
        "inventory_transfer_line_id": "example",
        "target_departed_quantity": "0"
      }
    ]
  }
}, { maxAttempts: 1 });
console.log(result.meta.requestId);
