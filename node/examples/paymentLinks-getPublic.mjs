import { Client } from '@flintpay/node';
const clientBaseUrl = process.env.API_BASE_URL ?? "https://api.withflintpay.com";
const client = new Client({
  baseUrl: clientBaseUrl,
});
const result = await client.paymentLinks.getPublic(
  "example",
  {}
);
console.log(result.payment_link.payment_link_id);
console.log(result.payment_link.status);
