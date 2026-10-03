import { Client } from '@flintpay/node';
const clientBaseUrl = process.env.API_BASE_URL ?? "https://api.withflintpay.com";
const client = new Client({
  baseUrl: clientBaseUrl,
  token: process.env.API_TOKEN ?? '',
});
const result = await client.fraudWarnings.get(
  "example"
);
console.log(result.fraud_warning_id);
console.log(result.payment_intent_id);
