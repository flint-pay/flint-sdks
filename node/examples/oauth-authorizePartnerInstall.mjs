import { Client } from "@flintpay/node";
const baseUrl = process.env.API_BASE_URL;
if (!baseUrl) throw new Error("Set API_BASE_URL to your sandbox or local mock URL");
const client = new Client({
  baseUrl,
  allowInsecureHttp: ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
const result = await client.oauth.authorizePartnerInstall(
  {
    response_type: "code",
    client_id: "example",
    redirect_uri: "example",
    mode: "test",
    code_challenge: "example",
    code_challenge_method: "S256",
    state: "example",
  }
);
// Location may be relative or use another origin. The SDK does not follow it.
// Validate the destination before a separate download; do not forward API credentials.
console.log(result.meta.status, result.data.location ?? "No Location header");
console.log(result.meta.requestId);
