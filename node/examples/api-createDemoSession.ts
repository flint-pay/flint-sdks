import { Client } from '@flintpay/node';
const client = new Client({
  baseUrl: process.env.API_BASE_URL ?? 'https://sandbox.example.invalid',
});
const result = await client.api.createDemoSession(
  {
    body: {},
  },
  { maxAttempts: 1 },
);
console.log(result.data.data.demo_session_id);
console.log(result.data.data.sandbox_id);
console.log(result.meta.requestId);
