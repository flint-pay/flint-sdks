import { Client } from '@flintpay/node';
const client = new Client({
  baseUrl: process.env.API_BASE_URL ?? 'https://sandbox.example.invalid',
  apiKey: process.env.API_KEY ?? '',
});
const result = await client.reviews.get(
  "example",
  {},
  { maxAttempts: 1 },
);
console.log(result.payment_intent_id);
console.log(result.review_id);
