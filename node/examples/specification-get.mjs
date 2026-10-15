import { Client } from "@flintpay/node";
const baseUrl = process.env.API_BASE_URL ?? "https://api.withflintpay.com";
const client = new Client({
  baseUrl,
});
const result = await client.specification.get();
console.log(result.meta.requestId);
