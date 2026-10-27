import { Client } from "@flintpay/node";
const baseUrl = process.env.API_BASE_URL;
if (!baseUrl) throw new Error("Set API_BASE_URL to your sandbox or local mock URL");
const apiKey = process.env.API_KEY;
if (!apiKey) throw new Error("Set API_KEY: this call requires a credential");
const client = new Client({
  baseUrl,
  allowInsecureHttp: ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
  apiKey,
});
const result = await client.reportDownloads.get(
  "example"
);
// Location may be relative or use another origin. The SDK does not follow it.
// Validate the destination before a separate download; do not forward API credentials.
console.log(result.meta.status, result.data.location ?? "No Location header");
console.log(result.meta.requestId);
