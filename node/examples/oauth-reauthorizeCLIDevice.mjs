import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
const result = await client.oauth.reauthorizeCLIDevice(
  {
    client_id: "flint-cli",
    refresh_token: "example",
    scope: "example",
    session_mode: "contexts",
  }
);
console.log(result);
