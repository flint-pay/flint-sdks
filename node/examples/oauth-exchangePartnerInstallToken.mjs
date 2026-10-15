import { Client } from "@flintpay/node";
const baseUrl = process.env.API_BASE_URL ?? "https://api.withflintpay.com";
const client = new Client({
  baseUrl,
});
const result = await client.oauth.exchangePartnerInstallToken(
  {
    client_id: "example",
    client_secret: "example",
    grant_type: "authorization_code",
  }
);
console.log(result.meta.requestId);
