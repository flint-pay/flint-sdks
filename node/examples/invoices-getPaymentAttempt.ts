import { Client } from '@flintpay/node';
const client = new Client({
  baseUrl: process.env.API_BASE_URL ?? 'https://sandbox.example.invalid',
  apiKey: process.env.API_KEY ?? '',
});
const result = await client.invoices.getPaymentAttempt(
  "example",
  "example",
  {},
  { maxAttempts: 1 },
);
console.log(result.invoice_id);
console.log(result.invoice_payment_attempt_id);
