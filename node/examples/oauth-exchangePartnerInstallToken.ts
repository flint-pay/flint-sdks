import { Client } from '@flintpay/node';
const client = new Client({
  baseUrl: process.env.API_BASE_URL ?? 'https://sandbox.example.invalid',
});
const result = await client.oauth.exchangePartnerInstallToken(
  {
    client_id: "example",
    client_secret: "example",
    grant_type: "example",
  },
  { maxAttempts: 1 },
);
console.log(result.environment_grant_id);
console.log(result.merchant_id);
