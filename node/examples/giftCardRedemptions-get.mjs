import { Client } from '@flintpay/node';
const clientBaseUrl = process.env.API_BASE_URL ?? "https://api.withflintpay.com";
const client = new Client({
  baseUrl: clientBaseUrl,
  token: process.env.API_TOKEN ?? '',
});
const result = await client.giftCardRedemptions.get(
  "example"
);
console.log(result.external_reference_id);
console.log(result.gift_card_id);
