import { Client } from '@flintpay/node';
const client = new Client({
  baseUrl: process.env.API_BASE_URL ?? 'https://sandbox.example.invalid',
  apiKey: process.env.API_KEY ?? '',
});
const result = await client.paymentIntents.get(
  "pi_replace_with_your_payment_intent_id",
  {},
  { maxAttempts: 1 },
);
console.log(result.payment_intent_id);
console.log(result.status);
