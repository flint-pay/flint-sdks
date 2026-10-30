import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
const result = await client.reportDownloads.get(
  "rdl_01ARZ3NDEKTSV4RRFFQ69G5FAV"
);
// Location may be relative or use another origin. The SDK does not follow it.
// Validate the destination before a separate download; do not forward API credentials.
console.log(result.lastResponse.status, result.data.location ?? "No Location header");
console.log(result.lastResponse.requestId);
