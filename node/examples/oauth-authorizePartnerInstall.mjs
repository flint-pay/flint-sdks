import { Client } from "@flintpay/node";
const baseUrl = process.env.API_BASE_URL ?? "https://api.withflintpay.com";
const apiKey = process.env.API_KEY;
const client = new Client({
  baseUrl,
  ...(apiKey ? { apiKey } : {}),
});
const result = await client.oauth.authorizePartnerInstall(
  {
    response_type: "code",
    client_id: "example",
    redirect_uri: "example",
    mode: "test",
    state: "example",
  }
);
// Location may be relative or use another origin. The SDK does not follow it.
// Validate the destination before a separate download; do not forward API credentials.
console.log(result.meta.status, result.data.location ?? "No Location header");
console.log(result.meta.requestId);
