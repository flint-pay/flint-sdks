import { Client } from '@flintpay/node';
const clientBaseUrl = process.env.API_BASE_URL ?? "https://api.withflintpay.com";
const client = new Client({
  baseUrl: clientBaseUrl,
  token: process.env.API_TOKEN ?? '',
});
const result = await client.customers.getDeletionRequest(
  "example",
  "example",
  {}
);
console.log(result.customer_deletion_request_id);
console.log(result.customer_id);
