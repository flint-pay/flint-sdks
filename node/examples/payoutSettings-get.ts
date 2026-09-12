import { Client } from '@flintpay/node';
const client = new Client({
  baseUrl: process.env.API_BASE_URL ?? 'https://sandbox.example.invalid',
  apiKey: process.env.API_KEY ?? '',
});
const result = await client.payoutSettings.get(
  {},
  { maxAttempts: 1 },
);
console.log(result.merchant_id);
console.log(result.payout_settings_id);
