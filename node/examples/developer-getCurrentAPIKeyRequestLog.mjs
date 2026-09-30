import { Client } from '@flintpay/node';
const clientBaseUrl = process.env.API_BASE_URL ?? "https://api.withflintpay.com";
const client = new Client({
  baseUrl: clientBaseUrl,
  token: process.env.API_TOKEN ?? '',
});
const result = await client.developer.getCurrentAPIKeyRequestLog(
  "example",
  {}
);
console.log(result.api_request_log_id);
console.log(result.request_id);
