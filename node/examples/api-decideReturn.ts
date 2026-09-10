import { Client } from '@flintpay/node';
const client = new Client({ baseUrl: process.env.API_BASE_URL ?? 'https://sandbox.example.invalid', allowInsecureHttp: process.env.API_ALLOW_INSECURE_HTTP === '1', authMode: "merchant", credentials: { ["merchant"]: { ["BearerAuth"]: process.env.API_MERCHANT_BEARERAUTH ?? '' } } });
const result = await client.api.decideReturn({
  "return_id": "example",
  "body": {
    "line_items": [
      {
        "approved_quantity": "0",
        "decision_basis": "policy_evaluation",
        "return_line_item_id": "example"
      }
    ]
  }
}, { maxAttempts: 1 });
console.log(result.meta.requestId);
