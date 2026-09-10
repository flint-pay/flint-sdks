import { Client } from '@flintpay/node';
const client = new Client({ baseUrl: process.env.API_BASE_URL ?? 'https://sandbox.example.invalid', allowInsecureHttp: process.env.API_ALLOW_INSECURE_HTTP === '1', authMode: "merchant", credentials: { ["merchant"]: { ["BearerAuth"]: process.env.API_MERCHANT_BEARERAUTH ?? '' } } });
const result = await client.api.revokeDeliveryDependency({
  "body": {
    "reason": "unsafe_configuration",
    "target": {
      "target_type": "location_geography",
      "location_id": "example",
      "location_geography_revision": "100"
    }
  }
}, { maxAttempts: 1 });
console.log(result.meta.requestId);
