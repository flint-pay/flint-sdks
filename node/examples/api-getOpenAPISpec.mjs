import { Client } from '@flintpay/node';
const client = new Client({
  baseUrl: process.env.API_BASE_URL ?? 'https://sandbox.example.invalid',
});
const result = await client.api.getOpenAPISpec(
  {},
  { maxAttempts: 1 },
);
console.log(result.meta.requestId);
