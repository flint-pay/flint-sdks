import { Client } from '@flintpay/node';
const client = new Client({ baseUrl: process.env.API_BASE_URL ?? 'https://sandbox.example.invalid', allowInsecureHttp: process.env.API_ALLOW_INSECURE_HTTP === '1', ...(process.env.API_TOKEN ? { token: process.env.API_TOKEN } : {}) });
const result = await client.api.exchangePartnerInstallToken({
  "body": {
    "client_id": "example",
    "client_secret": "example",
    "grant_type": "example"
  }
}, { maxAttempts: 1 });
console.log(result.meta.requestId);
