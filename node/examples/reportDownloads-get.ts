import { Client } from "@flintpay/node";
const baseUrl = process.env.API_BASE_URL ?? "https://api.withflintpay.com";
const apiKey = process.env.API_KEY;
if (!apiKey) throw new Error("Set API_KEY: this call requires a credential");
const client = new Client({
  baseUrl,
  apiKey,
});
const result = await client.reportDownloads.get(
  "example"
);
// Location may be relative or use another origin. The SDK does not follow it.
// Validate the destination before a separate download; do not forward API credentials.
console.log(result.meta.status, result.data.location ?? "No Location header");
console.log(result.meta.requestId);
