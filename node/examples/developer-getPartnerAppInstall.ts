import { Client } from "@flintpay/node";
const baseUrl = process.env.API_BASE_URL ?? "https://api.withflintpay.com";
const apiKey = process.env.API_KEY;
if (!apiKey) throw new Error("Set API_KEY: this call requires a credential");
const client = new Client({
  baseUrl,
  apiKey,
});
const result = await client.developer.getPartnerAppInstall(
  "example",
  "example"
);
console.log(result.merchant_id);
console.log(result.partner_app_install_id);
