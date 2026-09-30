import { Client } from '@flintpay/node';
const clientBaseUrl = process.env.API_BASE_URL ?? "https://api.withflintpay.com";
const client = new Client({
  baseUrl: clientBaseUrl,
  token: process.env.API_TOKEN ?? '',
});
const result = await client.deliveryMethods.get(
  "example",
  {}
);
console.log(result.current_delivery_method_revision_id);
console.log(result.delivery_method_id);
