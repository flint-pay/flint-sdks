import { Client } from '@flintpay/node';
const client = new Client({ baseUrl: process.env.API_BASE_URL ?? 'https://sandbox.example.invalid', allowInsecureHttp: process.env.API_ALLOW_INSECURE_HTTP === '1', authMode: "customer", credentials: { ["customer"]: { ["CustomerSessionBearer"]: process.env.API_CUSTOMER_CUSTOMERSESSIONBEARER ?? '' } } });
const result = await client.api.createMeReturn({
  "body": {
    "line_items": [
      {
        "order_line_item_id": "example",
        "requested_quantity": "100",
        "return_reason_id": "example"
      }
    ],
    "order_id": "example"
  }
}, { maxAttempts: 1 });
console.log(result.meta.requestId);
