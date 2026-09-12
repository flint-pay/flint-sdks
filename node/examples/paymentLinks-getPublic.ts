import { Client } from '@flintpay/node';
const client = new Client({
  baseUrl: process.env.API_BASE_URL ?? 'https://sandbox.example.invalid',
});
const result = await client.paymentLinks.getPublic(
  "example",
  {},
  { maxAttempts: 1 },
);
console.log(result.payment_link.payment_link_id);
console.log(result.payment_link.status);
