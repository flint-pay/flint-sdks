import { Client } from '@flintpay/node';
const clientBaseUrl = process.env.API_BASE_URL ?? "https://api.withflintpay.com";
const client = new Client({
  baseUrl: clientBaseUrl,
});
const result = await client.oauth.previewPartnerInstallAuthorization(
  {
    client_id: "example",
    redirect_uri: "example",
    mode: "test",
  }
);
console.log(result.client_id);
console.log(result.partner_app_id);
