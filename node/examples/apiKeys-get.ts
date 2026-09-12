import { Client } from '@flintpay/node';
const client = new Client({
  baseUrl: process.env.API_BASE_URL ?? 'https://sandbox.example.invalid',
  apiKey: process.env.API_KEY ?? '',
});
const result = await client.apiKeys.get(
  "example",
  {},
  { maxAttempts: 1 },
);
console.log(result.api_key_id);
console.log(result.status);
