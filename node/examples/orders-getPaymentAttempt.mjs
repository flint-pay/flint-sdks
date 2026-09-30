import { Client } from '@flintpay/node';
const clientBaseUrl = process.env.API_BASE_URL ?? "https://api.withflintpay.com";
const client = new Client({
  baseUrl: clientBaseUrl,
  token: process.env.API_TOKEN ?? '',
});
const result = await client.orders.getPaymentAttempt(
  "example",
  "example",
  {}
);
console.log(result.payment_attempt_id);
console.log(result.status);
