import { Client } from '@flintpay/node';
const client = new Client({ baseUrl: process.env.API_BASE_URL ?? 'https://sandbox.example.invalid', allowInsecureHttp: process.env.API_ALLOW_INSECURE_HTTP === '1', authMode: "merchant", credentials: { ["merchant"]: { ["BearerAuth"]: process.env.API_MERCHANT_BEARERAUTH ?? '' } } });
const result = await client.api.authorizePartnerInstall({
  "response_type": "code",
  "client_id": "example",
  "redirect_uri": "example",
  "mode": "test",
  "state": "example"
}, { maxAttempts: 1 });
console.log(result.meta.requestId);
