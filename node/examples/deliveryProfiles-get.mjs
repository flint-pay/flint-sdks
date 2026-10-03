import { Client } from '@flintpay/node';
const clientBaseUrl = process.env.API_BASE_URL ?? "https://api.withflintpay.com";
const client = new Client({
  baseUrl: clientBaseUrl,
  token: process.env.API_TOKEN ?? '',
});
const result = await client.deliveryProfiles.get(
  "example"
);
console.log(result.current_delivery_profile_revision_id);
console.log(result.delivery_profile_id);
