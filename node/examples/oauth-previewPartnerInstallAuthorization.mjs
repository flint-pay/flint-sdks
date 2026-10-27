import { Client } from "@flintpay/node";
const baseUrl = process.env.API_BASE_URL;
if (!baseUrl) throw new Error("Set API_BASE_URL to your sandbox or local mock URL");
const client = new Client({
  baseUrl,
  allowInsecureHttp: ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
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
