import { Client } from '@flintpay/node';
const client = new Client({
  baseUrl: process.env.API_BASE_URL ?? 'https://sandbox.example.invalid',
  apiKey: process.env.API_KEY ?? '',
});
const result = await client.orders.getCurrentDeliverySelection(
  "example",
  {},
  { maxAttempts: 1 },
);
console.log(result.checkout_session_id);
console.log(result.delivery_quote_id);
