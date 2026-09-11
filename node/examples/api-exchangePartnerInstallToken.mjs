import { Client } from '@flintpay/node';
const client = new Client({
  baseUrl: process.env.API_BASE_URL ?? 'https://sandbox.example.invalid',
});
const result = await client.api.exchangePartnerInstallToken(
  {
    body: {
      client_id: "example",
      client_secret: "example",
      grant_type: "example",
    },
  },
  { maxAttempts: 1 },
);
console.log(result.data.environment_grant_id);
console.log(result.data.merchant_id);
console.log(result.meta.requestId);
