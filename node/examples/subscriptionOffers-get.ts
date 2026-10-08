import { Client } from '@flintpay/node';
const clientBaseUrl = process.env.API_BASE_URL ?? "https://api.withflintpay.com";
const client = new Client({
  baseUrl: clientBaseUrl,
  token: process.env.API_TOKEN ?? '',
});
const result = await client.subscriptionOffers.get(
  "example"
);
console.log(result.status);
console.log(result.subscription_offer_id);
