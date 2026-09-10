import { Client } from '@flintpay/node';
const client = new Client({ baseUrl: process.env.API_BASE_URL ?? 'https://sandbox.example.invalid', allowInsecureHttp: process.env.API_ALLOW_INSECURE_HTTP === '1', ...(process.env.API_TOKEN ? { token: process.env.API_TOKEN } : {}) });
const result = await client.api.previewPartnerInstallAuthorization({
  "client_id": "example",
  "redirect_uri": "example",
  "mode": "test"
}, { maxAttempts: 1 });
console.log(result.meta.requestId);
