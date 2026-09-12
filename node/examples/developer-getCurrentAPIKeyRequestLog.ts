import { Client } from '@flintpay/node';
const client = new Client({
  baseUrl: process.env.API_BASE_URL ?? 'https://sandbox.example.invalid',
  apiKey: process.env.API_KEY ?? '',
});
const result = await client.developer.getCurrentAPIKeyRequestLog(
  "example",
  {},
  { maxAttempts: 1 },
);
console.log(result.api_request_log_id);
console.log(result.request_id);
