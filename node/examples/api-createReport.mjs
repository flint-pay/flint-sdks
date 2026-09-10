import { Client } from '@flintpay/node';
const client = new Client({ baseUrl: process.env.API_BASE_URL ?? 'https://sandbox.example.invalid', allowInsecureHttp: process.env.API_ALLOW_INSECURE_HTTP === '1', authMode: "merchant", credentials: { ["merchant"]: { ["BearerAuth"]: process.env.API_MERCHANT_BEARERAUTH ?? '' } } });
const result = await client.api.createReport({
  "body": {
    "currency": "USD",
    "interval_end_at": "2026-01-01T00:00:00Z",
    "interval_start_at": "2026-01-01T00:00:00Z",
    "report_type": "orders_itemized_v1"
  }
}, { maxAttempts: 1 });
console.log(result.meta.requestId);
